import { boolean, object, ref, string } from "yup";

export const forgotPasswordInitialValues = {
  email: "",
};

export const forgotPasswordValidation = object().shape({
  email: string().email("Invalid Email Address").required("Email is required"),
});

export const resetPasswordInitialValues = {
  password: "",
  confirm_password: "",
};

export const resetPasswordValidation = object().shape({
  password: string()
    .min(8, "Password must have at least 8 characters")
    .matches(/[A-Z]/, "Password must have at least one uppercase letters")
    .matches(/[a-z]/, "Password must have at least one lowercase letters")
    .matches(/[0-9]/, "Password must have at least one number")
    .required("Password is required"),
  confirm_password: string()
    .oneOf(
      [ref("password"), null],
      "Password and confirm password doesn't match"
    )
    .required("Confirm password is required"),
});
