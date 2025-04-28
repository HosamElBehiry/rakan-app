import { ErrorMessage, Field, Form, Formik } from "formik";
import { BrandIcon } from "../icons/brand-icon";
import {
  brandInitialValues,
  brandValidation,
} from "@/validation/user-brand-validation";
import { UserIcon } from "../icons/user-icon";
import { UploadIcon } from "../icons/upload-icon";
import { EditIcon } from "../icons/edit-icon";

export const UserNewBrandForm = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2 text-primary">
        <BrandIcon className="size-4" />
        <h4 className="text-sm font-bold">My Brand</h4>
      </div>
      <Formik
        initialValues={brandInitialValues}
        validationSchema={brandValidation}
        onSubmit={(values) => console.log({ values })}
      >
        <Form className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-white text-sm font-normal">
              Brand Name
            </label>
            <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
              <UserIcon className="size-4 text-primary" />
              <Field
                className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                placeholder="Enter your old Password"
                name="brand_name"
              />
            </div>
            <ErrorMessage
              name="brand_name"
              component="p"
              className="text-sm text-red-600 font-semibold"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-white text-sm font-normal">
              Brand Logo
            </label>
            <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
              <UploadIcon className="size-4 text-primary" />
              <Field
                className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                placeholder="Enter your new Password"
                type="password"
                name="brand_img"
              />
            </div>
            <ErrorMessage
              name="brand_img"
              component="p"
              className="text-sm text-red-600 font-semibold"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-full">
            <label htmlFor="" className="text-white text-sm font-normal">
              Brand Description
            </label>
            <div className="flex gap-3 bg-dark p-2.5 rounded-[10px] min-h-29">
              <EditIcon className="mt-1 text-primary" />
              <Field
                name="description"
                as="textarea"
                id="description"
                placeholder="Enter Your Brand here"
                className="flex-1 resize-none placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
              />
            </div>
            <ErrorMessage
              name="description"
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
