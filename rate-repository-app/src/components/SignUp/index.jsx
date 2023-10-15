import { useNavigate } from "react-router-native";

import SignUpContainer from "./SignUpContainer";
import useSignUp from "../../hooks/useSignUp";
import useSignIn from "../../hooks/useSignIn";

const SignIn = () => {
  const navigate = useNavigate();
  const [create] = useSignUp();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await create({
        username,
        password,
      });

      await signIn({ username, password });

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignIn;
