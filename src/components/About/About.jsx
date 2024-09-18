import React from "react";
import video from '../vidoes/frontend.mp4'

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 " >
           <video  className="rounded-3xl" src={video} autoPlay loop muted></video>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-5xl text-500 text-black-300 font-mono font-bold md:text-4xl">
            FrontEnd Developer,
            </h2>
            <p className="mt-6 text-2xl text-gray-600">
              I'm <h1 className="font-bold">Vishnu Gurjar</h1> 
            </p>
            <p className="text-xl">and I'm a FrontEnd Developer| Seeking an
              entry-level opportunity with an esteemed organization where I can
              utilize my skills & enhance learning in the field of work. Capable
              of mastering new technologies.</p>
            {/* <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
