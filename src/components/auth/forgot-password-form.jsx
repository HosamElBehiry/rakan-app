"use client";

import {
  forgotPasswordInitialValues,
  forgotPasswordValidation,
} from "@/validation/forgot-password-validation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { EmailIcon } from "../icons/email-icon";
import { Link, useRouter } from "@/i18n/navigation";

export const ForgotPasswordForm = () => {
  const { push } = useRouter();
  return (
    <Formik
      initialValues={forgotPasswordInitialValues}
      validationSchema={forgotPasswordValidation}
      onSubmit={(values) => {
        console.log({ values });
        push("/otp");
      }}
    >
      <Form className="flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="text-white text-sm font-normal">
            Email Address
          </label>
          <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
            <EmailIcon className="size-4 text-primary" />
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
        <div className="flex flex-col gap-5 w-full mt-2">
          <button
            type="submit"
            className="bg-primary text-white py-2.5 w-full rounded-[10px] font-bold cursor-pointer hover:bg-primary/90"
          >
            Continue
          </button>
          <Link
            href="/login"
            className="text-sm text-center text-white hover:underline"
          >
            Go Back
          </Link>
        </div>
      </Form>
    </Formik>
  );
};
