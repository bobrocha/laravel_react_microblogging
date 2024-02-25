import React from 'react';
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
          <div className="form-header border-b px-3 pt-3">
            <h1
              className="text-xl mb-4 font-bold"
            >
              Sign Up
            </h1>
          </div>
          <div className="form-main px-4">
            <div className="flex space-x-1.5  mt-4">
              <div className="input-wrapper w-full flex flex-col">
                <input
                  type="text"
                  name="first_name"
                  className="block border w-full p-1.5 rounded-md"
                  placeholder="First Name"
                //   required
                />
                {errors.first_name && !isSubmitting && <div className="bg-red-200 text-red-600 notice py-1.5 px-2 my-1 rounded-md">{errors.first_name}</div>}
              </div>
              <div className="input-wrapper w-full flex flex-col">
                <input
                  type="text"
                  name="last_name"
                  className="block border w-full p-1.5 rounded-md"
                  placeholder="Last Name"
                //   required
                />
                {errors.last_name && !isSubmitting && <div className="bg-red-200 text-red-600 notice py-1.5 px-2 my-1 rounded-md">{errors.last_name}</div>}
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
                {errors.middle_name && !isSubmitting && <div className="bg-red-200 text-red-600 notice py-1.5 px-2 my-1 rounded-md">{errors.middle_name}</div>}
              </div>
              <div className="input-wrapper w-full flex flex-col">
                <input
                  type="text"
                  name="username"
                  className="block border w-full p-1.5 rounded-md"
                  placeholder="Username"
                //   required
                />
                {errors.username && !isSubmitting && <div className="bg-red-200 text-red-600 notice py-1.5 px-2 my-1 rounded-md">{errors.username}</div>}
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
                //   required
                />
                {errors.birthdate && !isSubmitting && <div className="bg-red-200 text-red-600 notice py-1.5 px-2 my-1 rounded-md">{errors.birthdate}</div>}
              </div>
            </div>
            <div className="flex mt-4 space-x-1.5">
              <div className="input-wrapper w-full flex flex-col">
                <input
                  type="email"
                  name="email"
                  className="block border w-full p-1.5 rounded-md"
                  placeholder="Email"
                  //   required
                />
                {errors.email && !isSubmitting && <div className="bg-red-200 text-red-600 notice py-1.5 px-2 my-1 rounded-md">{errors.email}</div>}
              </div>
              <div className="input-wrapper w-full flex flex-col">
                <select
                  className="block border w-full p-1.5 rounded-md"
                //   required
                  name="gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && !isSubmitting && <div className="bg-red-200 text-red-600 notice py-1.5 px-2 my-1 rounded-md">{errors.gender}</div>}
              </div>
            </div>
            <div className="flex mt-4 space-x-1.5">
              <div className="input-wrapper w-full flex flex-col">
                <input
                  type="password"
                  name="password"
                  className="block border w-full p-1.5 rounded-md"
                  placeholder="Password"
                //   required
                />
                {errors.password && !isSubmitting && <div className="bg-red-200 text-red-600 notice py-1.5 px-2 my-1 rounded-md">{errors.password}</div>}
              </div>
              <div className="input-wrapper w-full flex flex-col">
                <input
                  type="password"
                  name="password_confirmation"
                  className="block border w-full p-1.5 rounded-md"
                  placeholder="Confirm Password"
                //   required
                />
                {errors.password_confirmation && !isSubmitting && <div className="bg-red-200 text-red-600 notice py-1.5 px-2 my-1 rounded-md">{errors.password_confirmation}</div>}
              </div>
            </div>
          </div>
          <div
            className="actions flex mt-4 p-3 border-t flex-col"
          >
            {!isSubmitting && success && <div className="bg-lime-200 text-lime-600 notice py-1.5 px-2 my-1 rounded-md">Succesfully Registered</div>}
            <div className="controls flex">
              <button
                type="submit"
                className={`border px-4 py-1.5 rounded-md bg-lime-500 hover:bg-lime-600 text-slate-50 ml-auto w-full md:w-auto ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                Sign up
              </button>
            </div>
          </div>
        </Form>
      </div>
    );
}
