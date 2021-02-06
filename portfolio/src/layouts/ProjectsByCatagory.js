

// this compoenent displays projects by catagory

const ProjectsByCatagory = (props) => {

  const {curruntCatagory} = props;
  return (
  <div className="projectContainer">
    {curruntCatagory.map((project, index) => {
      return (
        <div key={index} className="individualProject">
           <span className="projectName"> 
                    {project.name}       
           </span>
          <a className="projectLink" href={project.link} target="_blank">
          <img className="projectImage" src={project.image} alt="img"/> 
                <a  href={project.code}>
                <span className="codeLink"> 
                <span className="tags">  &lt; </span> 
                        code 
                <span className="tags">  &gt; </span>
                </span>
                </a>
          </a>
        </div>
      )
    })}
  </div>
  );
}

export default ProjectsByCatagory;