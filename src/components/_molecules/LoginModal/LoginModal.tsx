import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  InputType,
  LoginDetails,
  SignUpDetails,
  loginModalContent,
} from "./utils";
import React, { SetStateAction, useEffect, useState } from "react";
import LoginField from "../../_atoms/LoginField/LoginField";
import { useUser } from "@/src/api/Context/UserContext";
import ColourPicker from "../ColourPicker/ColourPicker";

interface LoginModalProps {
  setIsModalActive: React.Dispatch<SetStateAction<boolean>>;
}

const LoginModal: React.FC<LoginModalProps> = ({ setIsModalActive }) => {
  const { login, signUp } = useUser();
  const [userColour, setUserColour] = useState("");
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });
  const [signUpDetails, setSignUpDetails] = useState<SignUpDetails>({
    email: "",
    password: "",
    username: "",
    userColour: "",
  });

  const newUserValidator = (isNewUser: boolean) => {
    return isNewUser ? signUpDetails : loginDetails;
  };

  const userInputSetter = (
    isNewUser: boolean,
    input: string,
    inputType: InputType
  ) => {
    isNewUser
      ? setSignUpDetails((prevSignUpDetails) => ({
          ...prevSignUpDetails,
          userColour: userColour || "text-twitterBlue",
          [inputType]: input,
        }))
      : setLoginDetails((prevLoginDetails) => ({
          ...prevLoginDetails,
          [inputType]: input,
        }));
  };

  const handleLoginButtonClick = () => {
    if (isNewUser) {
      signUp(signUpDetails);
    } else {
      const newUser = {
        ...loginDetails,
        username: "",
      };

      login(newUser);
    }
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    setIsModalActive(isLoggedIn ? false : true);
  }, [isLoggedIn]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-slate-800 p-2 rounded w-1/1 h-90 sm:w-3/5">
        <div className="relative bg-slate-800 rounded-lg shadow dark:bg-gray-700 text-slate-50">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-slate-50 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setIsModalActive(false)}
          >
            <XMarkIcon height={30} width={30} />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-slate-50 dark:text-white">
              {loginModalContent.signIn}
            </h3>
            <form className="space-y-6">
              <LoginField
                newUserValidator={newUserValidator}
                isNewUser={isNewUser}
                inputType={InputType.Email}
                userInputSetter={userInputSetter}
              />
              <LoginField
                newUserValidator={newUserValidator}
                isNewUser={isNewUser}
                inputType={InputType.Password}
                userInputSetter={userInputSetter}
              />
              <ColourPicker setUserColour={setUserColour} />
              {isNewUser && (
                <>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-50 dark:text-white">
                      {loginModalContent.username}
                    </label>
                    <input
                      type="username"
                      name="username"
                      placeholder="JohnDoe123"
                      className="bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                      value={signUpDetails.username}
                      onChange={(e) =>
                        userInputSetter(
                          isNewUser,
                          e.target.value,
                          InputType.Username
                        )
                      }
                    ></input>
                  </div>
                </>
              )}
              <button
                type="button"
                onClick={() => handleLoginButtonClick()}
                className="w-full bg-twitterBlue text-white bg-blue-700 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {loginModalContent.logIn}
              </button>
              {!isNewUser && (
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  {loginModalContent.notRegistered}
                  <a
                    className="text-twitterBlue hover:underline hover:cursor-pointer dark:text-blue-500"
                    onClick={() => setIsNewUser(!isNewUser)}
                  >
                    {loginModalContent.createAccount}
                  </a>
                </div>
              )}
              {isNewUser && (
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  {loginModalContent.alreadyHaveAccount}
                  <a
                    href="#"
                    className="text-twitterBlue hover:underline dark:text-blue-500"
                    onClick={() => setIsNewUser(!isNewUser)}
                  >
                    {loginModalContent.signIn}
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
