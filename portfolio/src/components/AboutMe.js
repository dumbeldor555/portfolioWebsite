// this is about me component
import {Link} from 'react-router-dom';
// import resume and about you
import Resume from '../layouts/Resume';
import MyStory from '../layouts/MyStory';
const AboutMe = (props) => {

const {name, dispatch, showResume, showStory, myStory, aboutBackgroundHeight} = props;
console.log(showStory, showResume);
const handleClick = (clickedButton) => {
  dispatch({type: 'ABOUT_RESUME', clicked_btn: clickedButton});
}

// if the resume is present from previous click then lengthening the background


return (

<div style={{height: aboutBackgroundHeight}} className="aboutContainer">
  <h1 className="aboutMyName">Hey, I'm looking for a Web Developer's position.</h1>
  <p className="goofyText" >
  As you can see from my portfolio. I'm a newbie in the industry and would love to work on some challenging and problem-solving projects. 
  That contributes to my experience and growth and yeah, I'm not in the industry because it offers good money (ok it is one of many factors) 
  but my primary reasons for applying to your company are, as I stated growth, experience and, learning (ok, and also money)
   but the learning and experience stuff first.
  </p>

  <p className="goofyText">If you're just curious about my story which obviously you're not, but in case you are then go with the left button,
   or if you just wanna grab the résumé then go with the right button.
  </p>

    <div className="aboutMeButtons">
        <span onClick={handleClick.bind(this, 'MY_STORY')} className="mySotry"> My Story</span>
        <span onClick={handleClick.bind(this, 'MY_RESUME')} className="myResume">My Resume</span>
    </div>

  {showResume &&  <Resume />}
  {showStory && <MyStory myStory={myStory}/>}
  <span className="goToHome"> <Link className='linkOfComponent' to="/">  go to home </Link> </span> 
</div>
)
}

export default AboutMe;