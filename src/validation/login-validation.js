import { object, string } from "yup";

export const loginInitialValues = {
  email: "",
  password: "",
};

export const loginValidation = object().shape({
  email: string().email("Invalid Email Address").required("Email is required"),
  password: string()
    .min(8, "Password must have at least 8 characters")
    .matches(/[A-Z]/, "Password must have at least one uppercase letters")
    .matches(/[a-z]/, "Password must have at least one lowercase letters")
    .matches(/[0-9]/, "Password must have at least one number")
    .required("Password is required"),
});
