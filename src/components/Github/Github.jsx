import React from 'react'
import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
// import github from "../vidoes/github.mp4";

function Github() {

    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/jbmrgurjar')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (

    <>
    <div class="max-w rounded overflow-hidden shadow-lg grid  place-content-center h-screen">
  <Link><img src={data.avatar_url} alt="Git picture" width={300} className='rounded-full' /> </Link>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{data.name}</div>
   
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">repositories -: {data.public_repos}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">GitHub:id-{data.id}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Login_Name:-{data.login}</span>
  </div>
</div>


{/* <div className="relative h-96 ">
        <div className=" w-1/2 h-1/3 absolute top-0 right-0  ">
          <video className="rounded-3xl" src={github} autoPlay loop muted />
        </div>
        <div className=" flex items-start justify-start">
          <div className="mt-28 ">
            <h1 className=" text-4xl font-bold text-cyan-400">Computer technology</h1>
            <p className="mt-8 text-2xl font-extralight">
              Computer technology is the driving force <br />
              behind modern innovations,
              enabling   <br /> advancements in various fields such    <br />as healthcare,
              education, and communication.
            </p>
          </div>
        </div>
      </div> */}

    </>

    // <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.public_repos}
    // <img src={data.avatar_url} alt="Git picture" width={300} />
    // </div>
  )
}

export default Github