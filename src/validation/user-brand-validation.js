import { object, string } from "yup";

export const brandInitialValues = {
  brand_name: "",
  brand_img: "",
  brand_description: "",
};

export const brandValidation = object().shape({
  brand_name: string().required("Brrand name is required"),
  brand_img: string().required("Brrand image is required"),
  brand_description: string().required("Brrand description is required"),
});
