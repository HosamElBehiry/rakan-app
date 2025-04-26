import { array, object, string } from "yup";

export const generalInformationsInitialValues = {
  img: "",
  fullname: "",
  job: "",
  description: "",
  fields: [],
};

export const generalInformationsValidation = object().shape({
  fullname: string().required("Full name is required"),
  description: string().required("Description is required"),
  job: string().required("Job is required"),
  img: string().required("Image is required"),
  fields: array()
    .min(1, "Please select at least one item")
    .required("At least one selection is required"),
});

// constant for now
export const interestsOptions = [
  { value: "1", label: "Programming 1" },
  { value: "2", label: "Programming 2" },
  { value: "3", label: "Programming 3" },
  { value: "4", label: "Programming 4" },
  { value: "5", label: "Programming 5" },
  { value: "6", label: "Programming 6" },
  { value: "7", label: "Programming 7" },
  { value: "8", label: "Programming 8" },
  { value: "9", label: "Programming 9" },
  { value: "10", label: "Programming 10" },
  { value: "11", label: "Programming 11" },
  { value: "12", label: "Programming 12" },
  { value: "13", label: "Programming 13" },
  { value: "14", label: "Programming 14" },
  { value: "15", label: "Programming 15" },
  { value: "16", label: "Programming 16" },
  { value: "17", label: "Programming 17" },
  { value: "18", label: "Programming 18" },
  { value: "19", label: "Programming 19" },
  { value: "20", label: "Programming 20" },
  { value: "21", label: "Programming 21" },
  { value: "22", label: "Programming 22" },
  { value: "23", label: "Programming 23" },
  { value: "24", label: "Programming 24" },
];
