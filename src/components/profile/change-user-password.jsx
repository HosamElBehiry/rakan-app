import { EyeIcon } from "@/components/icons/eye-icon";
import { LockIcon } from "@/components/icons/lock-icon";
import {
  updatePasswordInitialValues,
  updatePasswordValidation,
} from "@/validation/update-password-validation";
import { ErrorMessage, Field, Form, Formik } from "formik";

export const ChangeUserPassword = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <LockIcon className="size-4 text-primary" />
        <h5 className="text-primary font-bold text-sm">Change Your Password</h5>
      </div>
      <Formik
        initialValues={updatePasswordInitialValues}
        validationSchema={updatePasswordValidation}
        onSubmit={(values) => console.log({ values })}
      >
        <Form className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-white text-sm font-normal">
              Old Password
            </label>
            <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
              <EyeIcon className="size-4" />
              <Field
                className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                placeholder="Enter your old Password"
                type="password"
                name="old_password"
              />
            </div>
            <ErrorMessage
              name="old_password"
              component="p"
              className="text-sm text-red-600 font-semibold"
            />
          </div>
          <div className="" />
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-white text-sm font-normal">
              New Password
            </label>
            <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
              <EyeIcon className="size-4" />
              <Field
                className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                placeholder="Enter your new Password"
                type="password"
                name="new_password"
              />
            </div>
            <ErrorMessage
              name="new_password"
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
          <div className="col-span-full mt-6 flex items-center justify-center">
            <button
              type="submit"
              className="bg-primary text-white py-2.5 px-10 rounded-full font-bold cursor-pointer hover:bg-primary/90"
            >
              Save Changes
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
