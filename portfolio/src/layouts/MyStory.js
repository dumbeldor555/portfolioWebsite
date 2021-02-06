// this is myStory component

const MyStory = (props) => {

  const {myStory} = props;
  return (
    <div className="myStory">
        <h2 className="myStoryHeading">Glad, That you decided to read my story</h2>   
        <h3 className="mySubHeading"> I promise I'll be quick </h3>  
           <ul className="storyPoints">
             {myStory.map((element, index) => (
            <div key={index}> <span> <i class="fas fa-asterisk"></i> </span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <li> {element} </li>  </div> 
             ))}
          </ul>
    </div>
  );
}

export default MyStory;