import React, { useState } from "react";
import { signup, login } from "../../../firebase";

const SignUp = () => {

  const [signState, setSignState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let userAuth = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (signState === "Sign Up") {
      signup(name, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <>
      <img
        src="/icons/icon.png"
        className="absolute z-10 w-50 mx-[10%] my-[1%]"
        alt=""
      />
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat m-0 p-0"
        style={{ backgroundImage: "url('/image/10005.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/60 to-black/60"></div>
        <div className=" bg-black/65 z-10 p-10">
          <h1 className="text-3xl py-10">{signState}</h1>
          <form onSubmit={userAuth}>
            <div className="flex flex-col items-center justify-center gap-8">
              {signState === "Sign Up" ? (
                <input
                  type="text"
                  className="bg-white/20 rounded py-3 px-5"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <></>
              )}
              <input
                type="text"
                className="bg-white/20 rounded py-3 px-5"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="bg-white/20 rounded py-3 px-5"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-red-600 font-bold rounded py-4 w-full cursor-pointer"
              >
                {signState === "Sign Up" ? "Sign Up" : "login"}
              </button>

              <div className=" text-gray-400 flex items-center justify-between w-full">
                <div className="flex items-center justify-center gap-2">
                  <input type="checkbox" />
                  <p>Remember Me </p>
                </div>
                <p>Need Help? </p>
              </div>
            </div>
          </form>

          {signState !== "Sign Up" ? (
            <h1 className="text-md text-center mt-15 text-gray-400">
              New To Netflix?{"     "}
              <span
                className="text-white font-bold cursor-pointer"
                onClick={() => setSignState("Sign Up")}
              >
                Sign Up Now
              </span>
            </h1>
          ) : (
            <h1
              className="text-md text-center mt-15 text-gray-400 cursor-pointer"
              onClick={() => setSignState("Login")}
            >
              Already have Account?
              <span className="text-white font-bold"> Login Now</span>
            </h1>
          )}
        </div>
      </section>
    </>
  );
};

export default SignUp;
