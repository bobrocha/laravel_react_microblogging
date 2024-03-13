import Notice from '@/components/layout/ui/Notice';
import Input  from '@/components/layout/ui/Input';
import Button from '@/components/layout/ui/Button';

import {
    Form,
    useActionData,
    useNavigation,
} from 'react-router-dom';

export default function Register() {
    const actionData   = useActionData();
    const navigation   = useNavigation();
    const errors       = actionData?.errors || {};
    const success      = actionData?.success;
    const isSubmitting = navigation.state === 'submitting';

    return (
        <div className="md:container md:mx-auto md:w-[500px] flex items-center md:mt-8">
        <Form
            className="border rounded-md w-full shadow-xl bg-slate-50"
            action="/register"
            method="post"
        >
            <div className="form-header border-b px-4 pt-4">
            <h1
                className="text-xl mb-4 font-bold"
            >Sign Up</h1>
            </div>
            <div className="form-main px-4">
            <div className="flex space-x-1.5  mt-4">
                <div className="input-wrapper w-full flex flex-col">
                <Input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    disabled={isSubmitting}
                    error={errors.first_name}
                    required
                />
                {errors.first_name && !isSubmitting && <Notice
                        className="mt-1"
                        theme="red"
                    >{errors.first_name}</Notice>
                }
                </div>
                <div className="input-wrapper w-full flex flex-col">
                <Input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    disabled={isSubmitting}
                    error={errors.last_name}
                    required
                />
                {errors.last_name && !isSubmitting && <Notice
                        className="mt-1"
                        theme="red"
                    >{errors.last_name}</Notice>
                }
                </div>
            </div>
            <div className="flex mt-4 space-x-1.5">
                <div className="input-wrapper w-full flex flex-col">
                <Input
                    type="text"
                    name="middle_name"
                    placeholder="Middle Name"
                    disabled={isSubmitting}
                />
                {errors.middle_name && !isSubmitting && <Notice
                        className="mt-1"
                        theme="red"
                    >{errors.middle_name}</Notice>
                }
                </div>
                <div className="input-wrapper w-full flex flex-col">
                <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    disabled={isSubmitting}
                    error={errors.username}
                    required
                />
                {errors.username && !isSubmitting && <Notice
                        className="mt-1"
                        theme="red"
                    >{errors.username}</Notice>
                }
                </div>
            </div>
            <div className="mt-4">
                <p className="text-gray-500">Birthdate:</p>
                <div className="input-wrapper w-full flex flex-col">
                <Input
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    disabled={isSubmitting}
                    error={errors.birthdate}
                    required
                />
                {errors.birthdate && !isSubmitting && <Notice
                        className="mt-1"
                        theme="red"
                    >{errors.birthdate}</Notice>
                }
                </div>
            </div>
            <div className="flex mt-4 space-x-1.5">
                <div className="input-wrapper w-full flex flex-col">
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    disabled={isSubmitting}
                    error={errors.email}
                    required
                />
                {errors.email && !isSubmitting && <Notice
                        className="mt-1"
                        theme="red"
                    >{errors.email}</Notice>
                }
                </div>
                <div className="input-wrapper w-full flex flex-col">
                <select
                    className="block border w-full p-1.5 rounded-md"
                    error={errors.gender}
                    required
                    name="gender"
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender && !isSubmitting && <Notice
                        className="mt-1"
                        theme="red"
                    >{errors.gender}</Notice>
                }
                </div>
            </div>
            <div className="flex mt-4 space-x-1.5">
                <div className="input-wrapper w-full flex flex-col">
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    disabled={isSubmitting}
                    error={errors.password}
                    required
                />
                {errors.password && !isSubmitting && <Notice
                        className="mt-1"
                        theme="red"
                    >{errors.password}</Notice>
                }
                </div>
                <div className="input-wrapper w-full flex flex-col">
                <Input
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    disabled={isSubmitting}
                    error={errors.password_confirmation}
                    required
                />
                {errors.password_confirmation && !isSubmitting && <Notice
                        claclassName="mt-1"
                        theme="red"
                    >{errors.password_confirmation}</Notice>
                }
                </div>
            </div>
            </div>
            <div
                className="form-footer flex mt-4 p-3 border-t flex-col"
            >
            {!isSubmitting && success && <Notice theme="lime" className="mb-2">Succesfully Registered</Notice>}
            <div className="form-actions flex">
                <Button
                    type="submit"
                    theme="lime"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    className="ml-auto"
                >
                Sign up
                </Button>
            </div>
            </div>
        </Form>
        </div>
    );
}
