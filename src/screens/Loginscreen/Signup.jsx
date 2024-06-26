import React, { useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function Signup() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    // Registration successful
    console.log("User registered successfully");
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("useremail", userData.email);
    localStorage.setItem("password", userData.password);
    localStorage.setItem("username", userData.username);
    Swal.fire({
      text: "Sign Up Successfully!",
      icon: "success",
      timer: 2000,
      showCancelButton: false,
      showConfirmButton: false,
    }).then(handleclick());
  };
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/");
  };

  return (
    <div className="h-[98%] flex mx-auto flex-col lg:flex-row m-20 my-auto mt-4">
      <div className="md:w-3/5 w-[98%] items-center px-4 py-4 rounded-3xl my-auto mx-auto">
        <h1 className="flex w-[80%] mx-auto text-3xl font-semibold">SIGN UP</h1>
        <p className="font-medium w-[80%] mx-auto text-lg text-gray-500 mt-2">
          Please enter you details.
        </p>

        <div className="mt-4  justify-center w-[80%] items-center mx-auto">
          <div className="flex flex-col mt-2">
            <label className="text-lg font-medium">User Name</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2  px-4 mt-1 bg-transparent"
              placeholder="Enter your User Name"
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Email</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2 px-4 mt-1 bg-transparent"
              placeholder="Enter your email"
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="text-lg font-medium">Password</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2  px-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Confirm Password</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2 px-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-base" htmlFor="remember">
                Remember for 30 days
              </label>
            </div>
            <button className="font-medium text-base text-primary">
              Forgot password
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-y-3">
            <button
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2  rounded-xl bg-primary text-white font-bold text-lg"
              type="button"
              onClick={handleRegister}
            >
              Sign Up
            </button>
            <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2  rounded-xl text- font-semibold text-lg border-2 border-gray-100 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                  fill="#EA4335"
                />
                <path
                  d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                  fill="#34A853"
                />
                <path
                  d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                  fill="#4A90E2"
                />
                <path
                  d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                  fill="#FBBC05"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <p className="font-medium text-base">Already have an account?</p>
            <button className="ml-2 font-medium text-base text-primary">
              <Link to="/Login">Log in</Link>
            </button>
          </div>
        </div>
      </div>
      <Details />
    </div>
  );
}
