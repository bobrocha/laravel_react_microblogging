import Input         from '@/components/layout/ui/Input';
import Button        from '@/components/layout/ui/Button';
import Notice        from '@/components/layout/ui/Notice';
import { useAuth }   from '@/contexts/AuthContext';
import { useEffect } from 'react';

import {
    Form,
    useActionData,
    useNavigation,
    useNavigate,
} from 'react-router-dom';

export default function Login() {
    const actionData   = useActionData();
    const navigation   = useNavigation();
    const errors       = actionData?.errors || {};
    const success      = actionData?.success;
    const user         = actionData?.user;
    const isSubmitting = navigation.state === 'submitting';
    const auth         = useAuth();
    const navigate     = useNavigate();

    useEffect(() => {
        if(success) {
            auth.login(user, () => {
                navigate('/user');
            });
        }
    }, [success, user]);

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
                            required
                            error={errors.email}
                            disabled={isSubmitting}
                        />
                        {errors.email && !isSubmitting && <Notice
                            className="mt-1"
                            theme="red"
                            >{errors.email}</Notice>
                        }
                    </div>
                    <div className="input-wrapper w-full flex flex-col mt-4">
                        <Input
                            type="password"
                            name="password"
                            placeholder="Passsword"
                            required
                            error={errors.password}
                            disabled={isSubmitting}
                        />
                         {errors.password && !isSubmitting && <Notice
                            className="mt-1"
                            theme="red"
                            >{errors.password}</Notice>
                        }
                    </div>
                </div>
                <div className="form-footer flex mt-4 p-3 border-t flex-col">
                    {errors.authenticated && !isSubmitting && <Notice
                        theme="red"
                    >{errors.authenticated}</Notice>}
                    <div className="form-actions flex">
                        <Button
                            type="submit"
                            theme="lime"
                            className="ml-auto my-1 mx-1.5"
                            disabled={isSubmitting}
                            loading={isSubmitting}
                        >Log In</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}
