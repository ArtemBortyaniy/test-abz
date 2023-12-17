import * as Yup from "yup";

const UserFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Username is required")
    .min(2, "Username should contain at least 2 characters")
    .max(60, "Username should not exceed 60 characters"),
  email: Yup.string()
    .required("User email is required")
    .email("User email must be a valid email according to RFC2822")
    .min(2, "Email should contain at least 2 characters")
    .max(100, "Email should not exceed 100 characters"),
  phone: Yup.string()
    .required("User phone number is required")
    .matches(
      /^[+]?380([0-9]{9})$/,
      "Invalid phone format. Number should start with the code of Ukraine +380"
    ),
  position_id: Yup.number()
    .required("User's position ID is required")
    .integer("Position ID must be an integer")
    .min(1, "Position ID must be at least 1"),
  photo: Yup.mixed().required("Photo is required"),
});

export default UserFormSchema;
