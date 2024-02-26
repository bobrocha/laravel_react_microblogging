export default class ResourceRequest {
    constructor(url) {
        this.url     = url;
        this.headers = {
            'Content-Type' : 'application/json',
            Accept         : 'application/json',
        };
    }

    async get() {
        const options = {
            method  : 'GET',
            headers : this.headers,
        };

        try {
            const response = await fetch(this.url, options);

            if(response.status === 400) {
                throw new Error(`Unable to find resource ${this.url}`);
            }
        }
        catch(error) {
            throw new Error(error);
        }
    }

    async post(payload = {}) {
        const options = {
            method  : 'POST',
            body    : JSON.stringify(payload),
            headers : this.headers,
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
}
