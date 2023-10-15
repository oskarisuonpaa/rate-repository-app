import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const create = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        user: { username, password },
      },
    });

    return data;
  };

  return [create, result];
};

export default useSignUp;
