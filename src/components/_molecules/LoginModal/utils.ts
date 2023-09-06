import { isValidEmail } from "@/src/common/validators";

export const loginModalContent = {
  signIn: "Sign in to Twitter",
  email: "Your email",
  password: "Your password",
  username: "Your username",
  logIn: "Log in to your account",
  notRegistered: "Not registered? ",
  createAccount: "Create account",
  alreadyHaveAccount: "Already have an account? ",
};

export interface LoginDetails {
  email: string;
  password: string;
}
export interface SignUpDetails extends LoginDetails {
  username: string;
  userColour: string;
}

export enum InputType {
  Email = "email",
  Password = "password",
  Username = "username",
}

export const isInputValid = (value: string, inputType: InputType) => {
  switch (inputType) {
    case InputType.Email:
      return isValidEmail(value);
    case InputType.Password:
      return value.length >= 6;
    default:
      return false;
  }
};

export const getInputMessage = (inputType: InputType) => {
  switch (inputType) {
    case InputType.Email:
      return "Enter a valid email address";
    case InputType.Password:
      return "Password must be at least 6 characters";
    case InputType.Username:
      "Username should be alphanumeric (no special characters)";
  }
};
