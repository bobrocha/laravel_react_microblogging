import React from 'react';
import Input from '@/components/layout/ui/Input';

import {
    Form,
    useActionData,
    useNavigation,
} from 'react-router-dom';

export default function Login() {
    return (
        <div className="md:container md:mx-auto md:w-[500px] flex md:mt-8">
            <Form
                className="border rounded-md w-full shadow-xl bg-slate-50"
                action="/login"
                method="post"
            >
                <div className="form-header border-b px-4 pt-4">
                    <h1
                        className="text-xl mb-4 font-bold"
                    >Log In</h1>
                </div>
                <div className="form-main px-4">
                    <div className="input-wrapper w-full flex flex-col mt-4">
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper w-full flex flex-col mt-4">
                        <Input
                            type="password"
                            name="password"
                            placeholder="Passsword"
                            required={true}
                        />
                    </div>
                </div>
                <div className="form-footer flex mt-4 p-3 border-t flex-col">
                    <div class="form-message"> foo</div>
                    <div className="form-actions flex">
                        <button
                            type="submit"
                            className={`border px-4 py-1.5 rounded-md bg-lime-500 hover:bg-lime-600 text-slate-50 w-full md:w-auto ml-auto`}
                        >Login</button>
                    </div>
                </div>
            </Form>
        </div>
    );
}
