"use client";

import {
  generalInformationsInitialValues,
  generalInformationsValidation,
  interestsOptions,
} from "@/validation/user-profile-validation";
import { UserIcon } from "@/components/icons/user-icon";
import { EmailIcon } from "@/components/icons/email-icon";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { ProfileImg } from "@/components/profile/profile-img";
import { useState } from "react";

const NotificationsPage = () => {
  const [start, setStart] = useState(12);
  return (
    <Formik
      initialValues={generalInformationsInitialValues}
      validationSchema={generalInformationsValidation}
      onSubmit={(e) => console.log({ e })}
    >
      {({ setFieldValue, values }) => (
        <Form className="flex-1 bg-light-dark-2 py-11 px-23 rounded-3xl flex flex-col gap-12">
          <ProfileImg setFieldValue={setFieldValue} />
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="" className="text-white text-sm font-normal">
                  Full Name
                </label>
                <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
                  <UserIcon className="size-4 text-primary" />
                  <Field
                    className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                    placeholder="Ex: Hisham Mousa"
                    name="fullname"
                  />
                </div>
                <ErrorMessage
                  name="fullname"
                  component="p"
                  className="text-sm text-red-600 font-semibold"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-white text-sm font-normal">
                Job Title
              </label>
              <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
                <UserIcon className="size-4 text-primary" />
                <Field
                  className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                  placeholder="Ex : UI/UX Designer"
                  name="job"
                />
              </div>
              <ErrorMessage
                name="job"
                component="p"
                className="text-sm text-red-600 font-semibold"
              />
            </div>
            <div className="flex flex-col gap-2 col-span-full">
              <label htmlFor="" className="text-white text-sm font-normal">
                Job Description
              </label>
              <div className="flex gap-3 bg-dark p-2.5 rounded-[10px] min-h-56">
                <EmailIcon className="mt-1 text-primary" />
                <Field
                  name="description"
                  as="textarea"
                  id="description"
                  placeholder="Enter Your Description here"
                  className="flex-1 resize-none placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                />
              </div>
              <ErrorMessage
                name="description"
                component="p"
                className="text-sm text-red-600 font-semibold"
              />
            </div>
            <div className="flex flex-col gap-3.5 col-span-full">
              <label className="text-sm font-bold text-white">
                Interested Fields
              </label>
              <div className="grid grid-cols-4 gap-6">
                {interestsOptions.slice(0, start).map((option) => (
                  <div key={option.value} className="flex items-center gap-2">
                    <Field
                      type="checkbox"
                      name="fields"
                      className="appearance-none border min-w-3.5 max-w-3.5 min-h-3.5 max-h-3.5 flex-1 border-primary rounded-sm checked:bg-primary cursor-pointer"
                      id={option.value}
                      value={option.value}
                      checked={values.fields.includes(option.value)}
                    />
                    <label
                      htmlFor={option.value}
                      className="text-xs text-white cursor-pointer"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    setStart(
                      start === interestsOptions.length
                        ? 12
                        : interestsOptions.length
                    )
                  }
                  className="text-xs col-span-full cursor-pointer w-fit hover:underline text-primary font-bold"
                >
                  Show {start === interestsOptions.length ? "Less.." : "More.."}
                </button>
              </div>
              <ErrorMessage
                name="fields"
                component="p"
                className="text-sm text-red-600 font-semibold"
              />
            </div>
            <div className="col-span-full mt-3.5 flex items-center justify-center">
              <button
                type="submit"
                className="bg-primary text-white py-2.5 px-10 rounded-full font-bold cursor-pointer hover:bg-primary/90"
              >
                Save Changes
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NotificationsPage;
