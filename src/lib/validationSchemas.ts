import * as Yup from "yup";
import { PROVINCES } from "./data";

const provinceValues = PROVINCES.map((p) => p.value);

export const stepOneSchema = Yup.object({
  state: Yup.string()
    .oneOf(provinceValues, "Please select a valid province")
    .required("Province is required"),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Prefer not to say"], "Please select a gender")
    .required("Gender is required"),
  smoking_status: Yup.string()
    .oneOf(["Yes", "No"], "Please select smoking status")
    .required("Smoking status is required"),
});

export const stepTwoSchema = Yup.object({
  dob: Yup.string()
    .required("Date of birth is required")
    .test("is-18", "You must be at least 18 years old", (value) => {
      if (!value) return false;
      const today = new Date();
      const birth = new Date(value);
      if (isNaN(birth.getTime())) return false;
      let age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
      return age >= 18;
    }),
  insurance_amount: Yup.number()
    .typeError("Please enter a valid number")
    .required("Insurance amount is required")
    .min(1, "Amount must be greater than 0")
    .max(250000, "Amount cannot exceed $250,000"),
});

export const stepThreeSchema = Yup.object({
  first_name: Yup.string()
    .required("First name is required")
    .min(2, "Must be at least 2 characters")
    .max(50, "Must be less than 50 characters"),
  last_name: Yup.string()
    .required("Last name is required")
    .min(2, "Must be at least 2 characters")
    .max(50, "Must be less than 50 characters"),
  email_address: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone_home: Yup.string()
    .required("Phone number is required")
    .matches(
      /^[2-9]\d{2}[2-9]\d{6}$/,
      "Please enter a valid 10-digit Canadian phone number (e.g. 4165551234)"
    ),
  casl: Yup.boolean()
    .oneOf([true], "You must consent to receive communications")
    .required("Consent is required"),
});

export interface FunnelFormValues {
  state: string;
  gender: string;
  smoking_status: string;
  dob: string;
  insurance_amount: number | "";
  first_name: string;
  last_name: string;
  email_address: string;
  phone_home: string;
  casl: boolean;
}

