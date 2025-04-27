import {
  forgotPasswordInitialValues,
  forgotPasswordValidation,
} from "@/validation/forgot-password-validation";
import { EmailIcon } from "../icons/email-icon";
import { ErrorMessage, Field, Form, Formik } from "formik";

export const UserCurrentEmailForm = ({ step, setStep }) => {
  return (
    <div className="flex gap-5">
      <span className="size-3 border-2 mt-1 relative -start-1.5 -top-1.5 bg-light-dark-1 border-primary rounded-full flex items-center justify-center">
        <span className="size-1.5 bg-primary rounded-full" />
      </span>
      <Formik
        initialValues={forgotPasswordInitialValues}
        validationSchema={forgotPasswordValidation}
        onSubmit={() => {
          setStep(1);
        }}
      >
        <Form className="w-116 flex items-center gap-6">
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor=""
              className={`text-white ${
                step !== 0 ? "opacity-10" : "opacity-100"
              } text-sm`}
            >
              Current Email
            </label>
            <div
              className={`flex items-center gap-3 ${
                step !== 0 ? "bg-light-dark-1" : "bg-dark"
              } p-3 rounded-[10px]`}
            >
              <EmailIcon
                className={`size-4 text-primary ${
                  step !== 0 ? "opacity-10" : "opacity-100"
                }`}
              />
              <Field
                className="flex-1 placeholder:text-white/70 disabled:opacity-10 outline-none caret-white text-white/70 text-sm"
                placeholder="Enter your email"
                name="email"
                disabled={step !== 0}
              />
            </div>
            <ErrorMessage
              name="email"
              component="p"
              className="text-sm text-red-600 font-semibold"
            />
          </div>
          <button
            disabled={step !== 0}
            className="bg-gray-1 disabled:cursor-not-allowed disabled:opacity-10 py-3 hover:bg-gray-1/70 self-end cursor-pointer text-white text-sm rounded-full font-bold w-27"
          >
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};
