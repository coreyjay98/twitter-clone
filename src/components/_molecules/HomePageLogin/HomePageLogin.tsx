import { homePageLoginContent } from "./utils";
import "./HomePageLogin.css";

const HomePageLogin = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gradient mb-4">
          {homePageLoginContent.welcome}
        </h1>
        <p className="text-lg text-gray-600">
          Join the conversation. Share your thoughts.
        </p>
        {/* Add any other content or buttons here */}
      </div>
    </div>
  );
};

export default HomePageLogin;
