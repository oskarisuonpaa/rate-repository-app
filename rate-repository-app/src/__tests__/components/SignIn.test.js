import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";

import SignInContainer from "../../components/SignIn/SignInContainer";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const submit = jest.fn();

      render(<SignInContainer onSubmit={submit} />);

      fireEvent.changeText(screen.getByPlaceholderText("Username"), "kalle");
      fireEvent.changeText(screen.getByPlaceholderText("Password"), "password");
      fireEvent.press(screen.getByText("Sign in"));

      await waitFor(() => {
        expect(submit).toHaveBeenCalledTimes(1);
        expect(submit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
