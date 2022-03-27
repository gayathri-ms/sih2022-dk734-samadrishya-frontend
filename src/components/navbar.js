import React, { useState } from "react";
import { Link } from "react-router-dom";
import { frontend } from "./variables";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="">
      <div className="">
        <nav className="sticky top-0 z-80 bg-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 cursor-pointer flex items-around fixed top-5  space-x-4">
                    <Link to="/">
                      <div
                        // onClick={() => window.location.replace("#home")}
                        className="flex flex-column"
                      >
                        <p className="text-center text-red-500 md:text-4xl -mt-3 font-bold text-xl">
                          सम{""}
                        </p>
                        <p className="text-center md:text-4xl -mt-3 font-bold text-xl ">
                          दृश्य
                        </p>
                      </div>
                    </Link>

                    <div className="md:fixed flex flex-row right-16">
                      {/* <a className="bg-transparent mx-5 hover:bg-transparent text-black text-xl font-medium hover:text-white hover:animate-pulse py-2 px-4 cursor-pointer hover:border-bottom-dashed ">
                        Admin
                      </a>
                      <a className="bg-transparent mx-5 hover:bg-transparent text-black text-xl font-medium hover:text-white hover:animate-pulse py-2 px-4 cursor-pointer hover:border-bottom-dashed ">
                        User
                      </a> */}
                      {/* <div onClick={() => window.location.replace("/#about")}>

                      </div> */}
                      <div
                        onClick={() =>
                          window.location.replace(`${frontend}#home`)
                        }
                      >
                        <p className="bg-transparent mx-5 -my-2 hover:bg-transparent text-black text-xl font-medium hover:text-gray-600 hover:animate-pulse py-2 px-4 cursor-pointer hover:border-2 hover:border-bottom-dashed ">
                          Home
                        </p>
                      </div>
                      <div
                        onClick={() =>
                          window.location.replace(`${frontend}#about`)
                        }
                      >
                        <p className="bg-transparent mx-5 -my-2 hover:bg-transparent text-black text-xl font-medium hover:text-gray-600 hover:animate-pulse py-2 px-4 cursor-pointer hover:border-2 hover:border-bottom-dashed ">
                          About Us
                        </p>
                      </div>
                      <div
                        onClick={() =>
                          window.location.replace(`${frontend}#features`)
                        }
                      >
                        <p className="bg-transparent mx-5 -my-2 hover:bg-transparent text-black text-xl font-medium hover:text-gray-600 hover:animate-pulse py-2 px-4 cursor-pointer hover:border-2 hover:border-bottom-dashed ">
                          Features
                        </p>
                      </div>
                      <div
                        onClick={() =>
                          window.location.replace(`${frontend}#team`)
                        }
                      >
                        <p className="bg-transparent mx-5 -my-2 hover:bg-transparent text-black text-xl font-medium hover:text-gray-600 hover:animate-pulse py-2 px-4 cursor-pointer hover:border-2 hover:border-bottom-dashed ">
                          Team
                        </p>
                      </div>
                      <Link to="/signin">
                        <p className="bg-transparent mx-5 -my-2 hover:bg-transparent text-black text-xl font-medium hover:text-gray-600 hover:animate-pulse py-2 px-4 cursor-pointer hover:border-2 hover:border-bottom-dashed ">
                          Signin
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <Link to="/">
                  <div
                    // onClick={() => window.location.replace("#home")}
                    className="flex flex-column"
                  >
                    <p className="text-left text-red-400 fixed left-10 top-5 font-bold text-3xl">
                      समदृश्य
                    </p>
                  </div>
                </Link>

                {visible ? (
                  <button
                    type="button"
                    onClick={() => setVisible(!visible)}
                    className="bg-gray-800 fixed right-5 top-5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <svg
                      className="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setVisible(!visible)}
                    className="bg-gray-800 z-100 fixed right-5 top-5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>

                    <svg
                      className="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
          {visible ? (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* <div onClick={() => window.location.replace("#home")}>
                  <p className="hover:bg-gray-700 text-white block px-5 py-1 rounded-md text-base font-medium">
                    Home
                  </p>
                </div> */}
                {/* <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-5 py-1 rounded-md text-base font-medium"
                >
                  User
                </a> */}
                <Link to="/signin">
                  <a className="text-gray-600 hover:bg-gray-200 hover:text-white block px-5 py-1 rounded-md text-base font-medium">
                    Signin
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
