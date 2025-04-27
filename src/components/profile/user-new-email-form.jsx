import {
  forgotPasswordInitialValues,
  forgotPasswordValidation,
} from "@/validation/forgot-password-validation";
import { EmailIcon } from "../icons/email-icon";
import { Form, Formik, Field, ErrorMessage } from "formik";

export const UserNewEmailForm = ({ step, setStep }) => {
  return (
    <div className="flex gap-5">
      {step < 2 ? (
        <span className="size-1.5 bg-primary relative -start-1 mt-2 rounded-full" />
      ) : (
        <span className="size-3 border-2 mt-3 relative -start-1.5 -top-1.5 bg-light-dark-1 border-primary rounded-full flex items-center justify-center">
          <span className="size-1.5 bg-primary rounded-full" />
        </span>
      )}
      <Formik
        initialValues={forgotPasswordInitialValues}
        validationSchema={forgotPasswordValidation}
        onSubmit={(e) => {
          console.log({ e });
          setStep((prev) => prev + 1);
        }}
      >
        <Form className="w-116 flex items-center gap-6">
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor=""
              className={`text-white ${
                step !== 2 ? "opacity-10" : "opacity-100"
              } text-sm`}
            >
              New Email
            </label>
            <div
              className={`flex items-center gap-3 ${
                step !== 2 ? "bg-light-dark-1" : "bg-dark"
              } p-3 rounded-[10px]`}
            >
              <EmailIcon
                className={`size-4 text-primary ${
                  step !== 2 ? "opacity-10" : "opacity-100"
                }`}
              />
              <Field
                disabled={step !== 2}
                className="flex-1 disabled:opacity-10 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                placeholder="Enter your new email"
                name="email"
              />
            </div>
            <ErrorMessage
              name="email"
              component="p"
              className="text-sm text-red-600 font-semibold"
            />
          </div>
          <button
            disabled={step !== 2}
            className="bg-gray-1 disabled:opacity-10 disabled:cursor-not-allowed py-3 hover:bg-gray-1/70 self-end cursor-pointer text-white text-sm rounded-full font-bold w-27"
          >
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};
