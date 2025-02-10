import React from "react";
import video from '../vidoes/frontend.mp4'
import photo from '../About/photo.jpg';

function About() {
  return (
    <div className='font-mono w-full h-full'>
      <section className=' items-center bg-cover h-full w-full justify-center pl-20'>
        <div className="container py-5 text-xs item">
          <div className="row">
            <div className="col-lg-3">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img 
                    src={photo} 
                    alt="avatar"
                    className="rounded-full img-fluid w-30" 
                    
                  />
                  <h5 className="my-3">VISHNU GURJAR</h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Gwalior India</p>
                  <div className="d-flex justify-content-center text-sm mb-2">
                    <a href="https://www.linkedin.com/in/vishnu-gurjar-455b17328/" target="_blank" rel="noreferrer">
                      <button type="button" className="btn btn-primary ">LinkedIn</button>
                    </a>
                    <a href="https://github.com/jbmrgurjar" target="_blank" rel="noreferrer">
                      <button type="button" className="btn btn-outline-primary  ms-1">GitHub</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                      <a href="https://www.linkedin.com/in/vishnu-gurjar-455b17328/" target="_blank" rel="noreferrer">
                        <button type="button" className="btn btn-outline-primary ">LinkedIn</button>
                      </a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      <a href="https://www.codechef.com/users/gurjarvishnu74" target="_blank" rel="noreferrer">
                        <button type="button" className="btn btn-outline-secondary">Codechef</button>
                      </a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <img className='w-5 h-5' src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" alt="" srcset="" />
                        
                      
                      <a href="https://leetcode.com/gurjarvishnu740/" target="_blank" rel="noreferrer">
                        <button type="button" className="btn btn-outline-success">LeetCode</button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">VISHNU GURJAR</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">gurjarvishnu740@gmail.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">9301390094</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">College</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Maharana Pratap College of Technology</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Gwalior India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
               
                <div className="col-md-10">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Skills Status</p>
                      <p className="mb-1 text-xs" >HTML</p>
                      <div className="progress rounded h-1">
                        <div className="progress-bar w-52" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1 text-xs">CSS</p>
                      <div className="progress rounded h-1">
                        <div className="progress-bar w-52" role="progressbar"  aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1 text-xs">JAVASCRIPT</p>
                      <div className="progress rounded h-1">
                        <div className="progress-bar w-52" role="progressbar" aria-valuenow="9" aria-valuemin="0" aria-valuemax="10"></div>
                      </div>
                      <p className="mt-4 mb-1 text-xs">REACTJS</p>
                      <div className="progress rounded h-1" >
                        <div className="progress-bar w-52" role="progressbar"aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1 text-xs">BOOTSTRAP</p>
                      <div className="progress rounded h-1" >
                        <div className="progress-bar w-52" role="progressbar"aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1 text-xs">TAILWINDCSS</p>
                      <div className="progress rounded h-1" >
                        <div className="progress-bar w-52" role="progressbar"aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1 text-xs" >Backend API</p>
                      <div className="progress rounded mb-2 h-1">
                        <div className="progress-bar w-52" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1 text-xs" >GIT</p>
                      <div className="progress rounded mb-2 h-1">
                        <div className="progress-bar w-52" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1 text-xs" >GITHUB</p>
                      <div className="progress rounded mb-2 h-1">
                        <div className="progress-bar w-52" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1 text-xs" >SQL</p>
                      <div className="progress rounded mb-2 h-1">
                        <div className="progress-bar w-52" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
   
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 " >
           <video  className="rounded-3xl" src={video} autoPlay loop muted></video>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-5xl text-500 text-black-300 font-mono font-bold md:text-4xl">
            Full-Stack Developer,
            </h2>
            <p className="mt-6 text-2xl text-gray-600">
              I'm <h1 className="font-bold">Vishnu Gurjar</h1> 
            </p>
            <p className="text-xl">and I'm a Full-Stack Developer| Seeking an
              entry-level opportunity with an esteemed organization where I can
              utilize my skills & enhance learning in the field of work. Capable
              of mastering new technologies.</p>
           
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default About;
