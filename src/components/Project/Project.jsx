import React, { useState, useEffect } from 'react';
// import ProjectCard from './Projectcard';
import ProjectCard from './ProjectCard';
import SimmerUi from './SimmerUi';
// import SimmerUI from '../SimmerUI';
// import projectsArrayData from './projectinfo'; 
import projectsArrayData from './projectinfo';


const Project = () => {
  
  const [projectsArray, setProjectsArray] = useState([]);

 
  useEffect(() => {
    
   
      setProjectsArray(projectsArrayData); 
  
  }, []);

  if (projectsArray.length === 0) {
    return <SimmerUi />;
  }

  return (
    <>
    <div className='flex justify-around flex-wrap pt-16 min-h-[100vh]'>
        {
          projectsArray.map((detailsObj) => (
            <ProjectCard key={detailsObj.id} obj={detailsObj} /> 
          ))
        }
      </div>
    </>
  );
}

export default Project;
