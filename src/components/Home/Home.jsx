import React from "react";
import { Link, NavLink } from "react-router-dom";
import video from "../vidoes/vidoes5.mp4";
import video1 from "../vidoes/vidoes6.mp4";

function Home() {
  return (
    <div className="mx-auto  w-full  max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-6  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 mt-64">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-11 text-right sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">Download Now</h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0  sm:my-20 sm:pt-1 pt-12    w-1/2 h-1/3">
          <div className="ml-0">
            <video className="rounded-3xl" src={video} autoPlay loop muted />
          </div>
        </div>
      </aside>

      <div className="relative h-96 ">
        <div className=" w-1/2 h-1/3 absolute top-0 right-0  ">
          <video className="rounded-3xl" src={video1} autoPlay loop muted />
        </div>
        <div className=" flex items-start justify-start">
          <div className="mt-28 pl-4 ">
            <h1 className=" text-4xl font-bold text-cyan-400">Computer technology</h1>
            <p className="mt-8 text-2xl font-extralight">
              Computer technology is the driving force <br />
              behind modern innovations,
              enabling   <br /> advancements in various fields such    <br />as healthcare,
              education, and communication.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        "Welcome to my personal Website" !{" "}
      </h1>
    </div>
  );
}

export default Home;
