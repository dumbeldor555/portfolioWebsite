
import React from 'react';
import {Link} from 'react-router-dom';
// this is navBar component
const NavBar = (props) => {

  const {dispatch} = props;

  const handleClick = (dispatch, type) => {
    dispatch({type: type});
  }
  return(
  <nav id="navbar">
    <ul class="navstyle">
      <li onClick={handleClick.bind(this, dispatch, 'HOME_CLICKED')}> <span>Home</span> </li>
      <li onClick={handleClick.bind(this, dispatch, 'WORK_CLICKED')}><span>Work</span></li>
      <li onClick={handleClick.bind(this, dispatch, 'CONTACT_CLICKED')}><span>Contact</span></li>
      <Link to="/about"> <li><span>About Me</span></li> </Link> 
    </ul>
  </nav>
  )
}

export default NavBar;