import Input  from '@/components/layout/ui/Input';
import Button from '@/components/layout/ui/Button';
import Notice from '@/components/layout/ui/Notice';

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
                            error={false}
                            disabled={false}
                        />
                    </div>
                    <div className="input-wrapper w-full flex flex-col mt-4">
                        <Input
                            type="password"
                            name="password"
                            placeholder="Passsword"
                            required={true}
                            error={false}
                            disabled={false}
                        />
                    </div>
                </div>
                <div className="form-footer flex mt-4 p-3 border-t flex-col">
                    <Notice
                        theme="sky"
                    >Lorem Ipsum is simply dummy text of the printing and vcbcc</Notice>
                    <div className="form-actions flex">
                        <Button
                            type="submit"
                            theme="lime"
                            className="ml-auto my-1 mx-1.5"
                        >Log In</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}
