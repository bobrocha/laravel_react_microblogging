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
                <input
                    type="text"
                    name="first_name"
                    className="block border w-full p-1.5 rounded-md"
                    placeholder="First Name"
                    // required
                />
                {errors.first_name && !isSubmitting && <Notice theme="red">{errors.first_name}</Notice>}
                </div>
                <div className="input-wrapper w-full flex flex-col">
                <input
                    type="text"
                    name="last_name"
                    className="block border w-full p-1.5 rounded-md"
                    placeholder="Last Name"
                    // required
                />
                {errors.last_name && !isSubmitting && <Notice theme="red">{errors.last_name}</Notice>}
                </div>
            </div>
            <div className="flex mt-4 space-x-1.5">
                <div className="input-wrapper w-full flex flex-col">
                <input
                    type="text"
                    name="middle_name"
                    className="block border w-full p-1.5 rounded-md"
                    placeholder="Middle Name"
                />
                {errors.middle_name && !isSubmitting && <Notice theme="red">{errors.middle_name}</Notice>}
                </div>
                <div className="input-wrapper w-full flex flex-col">
                <input
                    type="text"
                    name="username"
                    className="block border w-full p-1.5 rounded-md"
                    placeholder="Username"
                    // required
                />
                {errors.username && !isSubmitting && <Notice theme="red">{errors.username}</Notice>}
                </div>
            </div>
            <div className="mt-4">
                <p className="text-gray-500">Birthdate:</p>
                <div className="input-wrapper w-full flex flex-col">
                <input
                    type="date"
                    name="birthdate"
                    className="block border w-full p-1.5 rounded-md"
                    id="birthdate"
                    // required
                />
                {errors.birthdate && !isSubmitting && <Notice theme="red">{errors.birthdate}</Notice>}
                </div>
            </div>
            <div className="flex mt-4 space-x-1.5">
                <div className="input-wrapper w-full flex flex-col">
                <input
                    type="email"
                    name="email"
                    className="block border w-full p-1.5 rounded-md"
                    placeholder="Email"
                    // required
                />
                {errors.email && !isSubmitting && <Notice theme="red">{errors.email}</Notice>}
                </div>
                <div className="input-wrapper w-full flex flex-col">
                <select
                    className="block border w-full p-1.5 rounded-md"
                    // required
                    name="gender"
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender && !isSubmitting && <Notice theme="red">{errors.gender}</Notice>}
                </div>
            </div>
            <div className="flex mt-4 space-x-1.5">
                <div className="input-wrapper w-full flex flex-col">
                <input
                    type="password"
                    name="password"
                    className="block border w-full p-1.5 rounded-md"
                    placeholder="Password"
                    // required
                />
                {errors.password && !isSubmitting && <Notice theme="red">{errors.password}</Notice>}
                </div>
                <div className="input-wrapper w-full flex flex-col">
                <input
                    type="password"
                    name="password_confirmation"
                    className="block border w-full p-1.5 rounded-md"
                    placeholder="Confirm Password"
                    // required
                />
                {errors.password_confirmation && !isSubmitting && <Notice theme="red">{errors.password_confirmation}</Notice>}
                </div>
            </div>
            </div>
            <div
            className="form-footer flex mt-4 p-3 border-t flex-col"
            >
            {!isSubmitting && success && <div className="bg-lime-200 text-lime-600 notice py-1.5 px-2 my-1 rounded-md">Succesfully Registered</div>}
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
