import { object, ref, string } from "yup";

export const updatePasswordInitialValues = {
  old_password: "",
  new_password: "",
  confirm_password: "",
};

export const updatePasswordValidation = object().shape({
  old_password: string()
    .min(8, "Password must have at least 8 characters")
    .matches(/[A-Z]/, "Password must have at least one uppercase letters")
    .matches(/[a-z]/, "Password must have at least one lowercase letters")
    .matches(/[0-9]/, "Password must have at least one number")
    .required("Old password is required"),
  new_password: string()
    .min(8, "Password must have at least 8 characters")
    .matches(/[A-Z]/, "Password must have at least one uppercase letters")
    .matches(/[a-z]/, "Password must have at least one lowercase letters")
    .matches(/[0-9]/, "Password must have at least one number")
    .required("New password is required"),
  confirm_password: string()
    .oneOf(
      [ref("new_password"), null],
      "New password and confirm password doesn't match"
    )
    .required("Confirm password is required"),
});
