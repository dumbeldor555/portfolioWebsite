import React from 'react';

// this is intro component;
const Intro = (props) => {
  const {myName} = props;
  return (
  <div id="section1">
    <h1>Hey, I am {myName}</h1>
    <h3>A web developer </h3>
 </div>
  )
}

export default Intro;