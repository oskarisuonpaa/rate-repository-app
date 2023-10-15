import { useNavigate } from "react-router-native";
import useCreateReview from "../../hooks/useCreateReview";
import CreateReviewContainer from "./CreateReviewContainer";

const CreateReview = () => {
  const [create] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, rating, repositoryName, text } = values;

    try {
      const data = await create({
        ownerName,
        rating: Number(rating),
        repositoryName,
        text,
      });

      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
