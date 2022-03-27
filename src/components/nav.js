import React, { useState } from "react";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav>
      <div className="bg-pink-700 h-16">
        <div className="p-4 md:text-2xl font-medium">
          <div className="flex justify-between">
            <p className="text-center text-xl md:mx-20">
              Smart India Hackathon
            </p>

            <div className="hidden md-block">
              <button className="invisible md:visible bg-transparent hover:bg-pink-100 text-black text-xl font-medium hover:text-pink-600 py-1 px-3 hover:border-transparent rounded ">
                Signin
              </button>
              {/* <button
                className={visible ? "invisible" : "visible md:invisible"}
                onClick={() => setVisible(true)}
              >
                <IoCloseSharp />
              </button>
              <button
                onClick={() => setVisible(false)}
                className={
                  visible
                    ? "visible md:invisible mr-5 cursor-pointer"
                    : "invisible"
                }
              >
                <RiBarChartHorizontalFill />
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
            User
          </a>

          <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Signin
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
