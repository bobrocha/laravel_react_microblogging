import ResourceRequest from '@/classes/ResourceRequest';

export default async function action({ request }) {
    const formData = await request.formData();
    const data     = Object.fromEntries(formData);

    const response = {
        errors  : {},
        success : false,
    };

    const requiredFields = [
        'first_name',
        'last_name',
        'username',
        'birthdate',
        'email',
        'gender',
        'password',
        'password_confirmation',
    ];

    for(const field of requiredFields) {
        if(!Object.hasOwn(data, field) || !data[field].trim().length) {
            response.errors[field] = 'This is a required field.';

            break;
        }

        if(field === 'username' && data[field].length < 8) {
            response.errors[field] = 'Username must be at leat 8 characters.';

            break;
        }

        if((field === 'password' || field === 'password_confirmation') && data[field].length < 8) {
            response.errors[field] = 'Password must be at least 8 characters.';

            break;
        }
    }

    if(data.password !== data.password_confirmation) {
        response.errors.password_confirmation = 'Password and Confirm Password must match.';
        response.success                      = false;

        return response;
    }

    if(Object.keys(response.errors).length) {
        response.success = false;

        return response;
    }

    const resourceRequest = new ResourceRequest('/api/register');
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

  return response;
}
