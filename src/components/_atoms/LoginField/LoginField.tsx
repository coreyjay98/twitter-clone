import React from "react";
import { loginFieldContent } from "./utils";
import { InputType, LoginDetails } from "../../_molecules/LoginModal/utils";

interface LoginFieldProps {
  newUserValidator: (isNewUser: boolean) => LoginDetails;
  isNewUser: boolean;
  inputType: InputType;
  userInputSetter: (
    isNewUser: boolean,
    input: string,
    inputType: InputType
  ) => void;
}

const LoginField: React.FC<LoginFieldProps> = ({
  newUserValidator,
  isNewUser,
  inputType,
  userInputSetter,
}) => {
  const [isInvalid, setIsInvalid] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    userInputSetter(isNewUser, value, inputType);

    // Check validation
    if (inputType === InputType.Email) {
      setIsInvalid(!value.includes("@"));
    } else if (inputType === InputType.Password) {
      setIsInvalid(value.length < 6);
    }
  };
  return inputType === InputType.Email ? (
    <div>
      <label className="block mb-2 text-sm font-medium text-slate-50 dark:text-white">
        {loginFieldContent.email}
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className={`${
          isInvalid ? "border-red-500" : ""
        }bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
        placeholder="corey@gmail.com"
        required
        value={newUserValidator(isNewUser).email}
        onChange={(e) => handleChange(e)}
      ></input>
    </div>
  ) : (
    <div>
      <label className="block mb-2 text-sm font-medium text-slate-50 dark:text-white">
        {loginFieldContent.password}
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        className={`${
          isInvalid ? "border-red-500" : ""
        }bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
        required
        value={newUserValidator(isNewUser).password}
        onChange={(e) => handleChange(e)}
      ></input>
    </div>
  );
};

export default LoginField;
