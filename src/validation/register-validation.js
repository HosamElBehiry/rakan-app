import { boolean, object, ref, string } from "yup";

export const registerInitialValues = {
  fullname: "",
  email: "",
  password: "",
  confirm_password: "",
  terms: false,
};

export const registerValidation = object().shape({
  fullname: string().required("Full name is required"),
  terms: boolean()
    .oneOf([true], "You must accept terms")
    .required("You must accept terms"),
  email: string().email("Invalid Email Address").required("Email is required"),
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
