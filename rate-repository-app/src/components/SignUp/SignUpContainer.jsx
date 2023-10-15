import * as yup from "yup";
import { Formik } from "formik";

import SignUpForm from "./SignUpForm";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username must be at least 5 charactes long")
    .max(30, "Username must be at most 30 charactes long"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 charactes long")
    .max(50, "Password must be at most 50 charactes long"),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Password confirmation doesn't match password"
    )
    .required("Password confirmation is required"),
});

const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpContainer;
