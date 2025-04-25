"use client";

import {
  registerInitialValues,
  registerValidation,
} from "@/validation/register-validation";
import { EmailIcon } from "../icons/email-icon";
import { UserIcon } from "../icons/user-icon";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { EyeIcon } from "../icons/eye-icon";
import { Link } from "@/i18n/navigation";

export const RegisterForm = ({ type }) => {
  return (
    <Formik
      initialValues={registerInitialValues}
      validationSchema={registerValidation}
      onSubmit={(values) => console.log({ values })}
    >
      <Form className="flex flex-col gap-8 items-center justify-center w-11/12 me-auto">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="text-white text-sm font-normal">
            Full Name
          </label>
          <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
            <UserIcon className="size-4" />
            <Field
              className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
              placeholder="Enter your Full Name"
              name="fullname"
            />
          </div>
          <ErrorMessage
            name="fullname"
            component="p"
            className="text-sm text-red-600 font-semibold"
          />
        </div>
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
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="text-white text-sm font-normal">
            Repeat Your Password
          </label>
          <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
            <EyeIcon className="size-4" />
            <Field
              className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
              placeholder="Repeat Strong Password"
              type="password"
              name="confirm_password"
            />
          </div>
          <ErrorMessage
            name="confirm_password"
            component="p"
            className="text-sm text-red-600 font-semibold"
          />
        </div>
        <div className="flex flex-col gap-5 mt-2">
          <div className="flex items-center gap-3">
            <Field
              type="checkbox"
              id="accept"
              name="terms"
              className="appearance-none size-3.5 rounded-sm checked:bg-primary border border-primary cursor-pointer"
            />
            <label
              htmlFor="accept"
              className="text-xs flex-1 font-bold text-white cursor-pointer"
            >
              I agree to the{" "}
              <Link
                href={`/tell-us-more?type=${type}`}
                className="text-primary hover:underline"
              >
                platform's terms
              </Link>{" "}
              and policies by creating My account.
            </label>
          </div>
          <ErrorMessage
            name="terms"
            component="p"
            className="text-sm text-red-600 font-semibold"
          />
          <button
            type="submit"
            className="bg-primary text-white py-2.5 w-full rounded-[10px] font-bold cursor-pointer hover:bg-primary/90"
          >
            Create Account
          </button>
          <div className="flex items-center justify-between">
            <p className="text-sm text-white font-bold">
              Do you have an account?
            </p>
            <Link
              href="/login"
              className="text-sm font-bold text-primary hover:underline"
            >
              Login here
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
