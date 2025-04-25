"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { EyeIcon } from "../icons/eye-icon";
import { Link } from "@/i18n/navigation";
import {
  resetPasswordInitialValues,
  resetPasswordValidation,
} from "@/validation/forgot-password-validation";

export const ResetPasswordForm = () => {
  return (
    <Formik
      initialValues={resetPasswordInitialValues}
      validationSchema={resetPasswordValidation}
      onSubmit={(values) => console.log({ values })}
    >
      <Form className="flex flex-col gap-8 items-center justify-center">
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
            Repeat New Password
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
        <div className="flex flex-col gap-5 w-full mt-2">
          <button
            type="submit"
            className="bg-primary text-white py-2.5 w-full rounded-[10px] font-bold cursor-pointer hover:bg-primary/90"
          >
            Save Password
          </button>
          <Link
            href="/otp"
            className="text-sm text-center text-white hover:underline"
          >
            Go Back
          </Link>
        </div>
      </Form>
    </Formik>
  );
};
