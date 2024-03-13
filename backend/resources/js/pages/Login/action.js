import ResourceRequest from '@/classes/ResourceRequest';

export default async function action({ request }) {
    const formData = await request.formData();
    const data     = Object.fromEntries(formData);

    const response = {
        errors   : {},
        success : false,
    };

    const requiredFields = [
        'email',
        'password',
    ];

    for(const field of requiredFields) {
        if(!Object.hasOwn(data, field) || !data[field].trim().length) {
            response.errors[field] = 'This is a required field.';

            break;
        }
    }

    if(Object.keys(response.errors).length) {
        response.success = false;

        return response;
    }

    // Set the cookie
    await (new ResourceRequest('/sanctum/csrf-cookie')).get({}, false);;

    const resourceRequest = new ResourceRequest('/api/login');
    const result          = await resourceRequest.post(data);
    const hasErrors       = Object.keys(result.errors ?? {}).length;
    response.success      = !hasErrors;

    if(hasErrors) {
        for(const key in result.errors) {
            if(result.errors[key].length) {
                response.errors[key] = result.errors[key].pop();
            }
        }
    }

    if(Object.hasOwn(result, 'authenticated') && !result.authenticated) {
        response.success              = false;
        response.errors.authenticated = 'Invalid credentials.';
    }
    else {
        response.user               = result.user;
        response.user.authenticated = true;
    }

    return response;
}
