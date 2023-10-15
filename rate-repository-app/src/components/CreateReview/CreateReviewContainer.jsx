import * as yup from "yup";
import { Formik } from "formik";

import CreateReviewForm from "./CreateReviewForm";

const initialValues = {
  ownerName: "",
  rating: "",
  repositoryName: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .typeError("Rating must be a number between 0 and 100")
    .max(100, "Rating must be between 0 and 100")
    .min(0, "Rating must be between 0 and 100")
    .required("Rating is required"),
  text: yup.string(),
});

const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReviewContainer;
