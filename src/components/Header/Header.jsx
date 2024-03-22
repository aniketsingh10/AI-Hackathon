import React, { useEffect, useState } from "react";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [name, setName] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  const handleStorageChange = (event) => {
    if (event.key === "isLoggedIn") {
      setLoggedIn(event.newValue);
    }
  };

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("useremail");
    localStorage.removeItem("password");
    setLoggedIn(false);
  };

  useEffect(() => {
    const username = localStorage.getItem("username");

    setName(username);
  }, [isLoggedIn]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:scale-105 duration-300 ease-in-out"
      >
        {isLoggedIn ? (
          <Link to="/portfolio">Portfolio</Link>
        ) : (
          <Link to="/login">Portfolio</Link>
        )}
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:scale-105 duration-300 ease-in-out"
      >
        {isLoggedIn ? (
          <Link to="/analysis">Analysis</Link>
        ) : (
          <Link to="/login">Analysis</Link>
        )}
      </Typography>

      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:scale-105 duration-300 ease-in-out"
      >

        <Link to="/Aboutus">About Us</Link>
      </Typography> */}
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:scale-105 duration-300 ease-in-out"
      >
        <Link
          to="https://github.com/aniketsingh10/Portfolio-Mangement-System"
          target="_blank"
        >
          Github
        </Link>
      </Typography> */}
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 border">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium  ">
            <Link to="/" className="text-bold">
              Hackathon
            </Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                {isLoggedIn ? `Hi ${name}` : <Link to="/login">Log In</Link>}
              </Button>
              <Button
                size="sm"
                className="hidden lg:inline-block"
                style={{
                  backgroundColor: "rgb(59 130 246)",
                }}
              >
                {isLoggedIn ? (
                  <>
                    <Link to="/login" onClick={handleLogout}>
                      Log Out
                    </Link>
                  </>
                ) : (
                  <Link to="/signup">Sign up</Link>
                )}
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              {isLoggedIn ? `Hi ${name}` : <Link to="/login">Log In</Link>}
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              {isLoggedIn ? (
                <>
                  <Link to="/login" onClick={handleLogout}>
                    Log Out
                  </Link>
                </>
              ) : (
                <Link to="/signup">Sign up</Link>
              )}
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
