import React from 'react';
import IndividualCatagory from '../layouts/IndividualCatagory';
//this is projects component;

const Projects = (props) => {
  
  const {data, dispatch} = props;
  return (
    <div className="projectsContainerByCatagory">
      <h3 className="projectHeading">These are some of my Projects</h3>
        <ul className="catagoryList">
        {data.map((catagory,index) => {
          return(
            <IndividualCatagory data={data} key={index} dispatch={dispatch} catagory={catagory}/>
          );
        })}
        </ul>
    </div>
  )
}

export default Projects;