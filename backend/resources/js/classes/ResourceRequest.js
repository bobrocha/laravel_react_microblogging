export default class ResourceRequest {
    constructor(url) {
        this.url = url;

        this.setHeaders();
    }

    setHeaders(headers = {}) {
        if(!Object.keys(headers).length) {
            this.headers = {
                'Content-Type' : 'application/json',
                Accept         : 'application/json',
            };
        }
        else {
            this.headers = headers;
        }

        const csrf = this.getCsrfToken();

        if(csrf) {
            this.headers.credendials     = 'include';
            this.headers['X-XSRF-TOKEN'] = csrf;
        }
    }

    async get(params = {}, returnResponse = true) {
        const options = {
            method  : 'GET',
            headers : this.headers,
            ...params
        };

        try {
            const response = await fetch(this.url, options);

            if(response.status === 400) {
                throw new Error(`Unable to find resource ${this.url}`);
            }

            if(!returnResponse) {
                return;
            }

            return await response.json();
        }
        catch(error) {
            throw new Error(error);
        }
    }

    async post(payload = {}, params = {}) {
        const options = {
            method  : 'POST',
            body    : JSON.stringify(payload),
            headers : this.headers,
            ...params,
        };

        try {
            const response = await fetch(this.url, options);

            if(response === 419) {
                throw new Error('Session expired.');
            }

            return await response.json();
        }
        catch(error) {
            throw new Error(error);
        }
    }

    async delete() {
        const options = {
            method  : 'DELETE',
            headers : this.headers,
        };

        try {
            const response = await fetch(this.url, options);

            if(response.status === 404) {
                throw new Error(`Unable to find resource ${this.url}`);
            }

            return await response.json();
        }
        catch(error) {
            return new Error(error);
        }
    }

    async sleep() {
        return new Promise(resolve => setTimeout(resolve, 3000));
    }

    getCsrfToken() {
        if(document.cookie) {
            const cookies = document.cookie.split('; ');
            const result  = cookies.find(el => el.startsWith('XSRF-TOKEN'));

            return result?.split('=').pop();
        }
    }
}
