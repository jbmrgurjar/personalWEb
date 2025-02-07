import React from 'react'



const ProjectCard = ({obj}) => {

  
  
  return (
   
    <div>
       
        <div className="card" style={{width : "18rem" , height:"20rem" , overflow:"scroll" }}>
  <img className="card-img-top rounded-3xl" style={{height:"30%"}} src={obj.imageLink} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title text-sm">{obj.projectTittle}</h5>
    <p className="card-text text-xs">{obj.projectDes}</p>
  </div>

</div>
<div className="card-body flex-row  ">
    <button className='btn bg-slate-500' type="button"><a href={obj.github}>Github Link</a></button>
    <button className='btn bg-lime-300' type='button'><a href={obj.projectLink}>Project link</a></button>
  </div>
    </div>
  )
}

export default ProjectCard;