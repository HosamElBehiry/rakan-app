"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { EmailIcon } from "../icons/email-icon";
import { EyeIcon } from "../icons/eye-icon";
import { Link } from "@/i18n/navigation";
import {
  loginInitialValues,
  loginValidation,
} from "@/validation/login-validation";

export const LoginForm = () => {
  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginValidation}
      onSubmit={(values) => console.log({ values })}
    >
      <Form className="flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="text-white text-sm font-normal">
            Email Address
          </label>
          <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
            <EmailIcon className="size-4" />
            <Field
              className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <ErrorMessage
            name="email"
            component="p"
            className="text-sm text-red-600 font-semibold"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-white text-sm font-normal">
              Password
            </label>
            <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
              <EyeIcon className="size-4" />
              <Field
                className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                placeholder="Enter Strong Password"
                type="password"
                name="password"
              />
            </div>
            <ErrorMessage
              name="password"
              component="p"
              className="text-sm text-red-600 font-semibold"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <input
                type="checkbox"
                id="remember-me"
                className="appearance-none size-3 border border-primary rounded-xs checked:bg-primary cursor-pointer"
              />
              <label
                htmlFor="remember-me"
                className="text-xs cursor-pointer text-white"
              >
                Remember Me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-primary text-xs hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full mt-2">
          <button
            type="submit"
            className="bg-primary text-white py-2.5 w-full rounded-[10px] font-bold cursor-pointer hover:bg-primary/90"
          >
            Log in
          </button>
          <div className="flex items-center justify-between">
            <p className="text-sm text-white font-bold">
              Don't have an account?
            </p>
            <Link
              href="/"
              className="text-sm font-bold text-primary hover:underline"
            >
              Sign up here
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
