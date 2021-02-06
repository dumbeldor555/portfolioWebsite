import React from 'react';
const IndividualCatagory = (props) => {

  const {data, catagory, dispatch} = props;
  const handleHover = (dispatch, catagoryName) => {
    dispatch({type:'HOVER_OVER_CATAGORIES',catagory: catagoryName});

    // heighlighting the catagroy
    const individualCatagory = document.querySelectorAll('.individualCatagory');
    data.forEach((individualData, index) => {
       
      if(catagoryName === Object.keys(individualData)[0]) {
        individualCatagory[index].classList.add('heighlight');
      } else {
        individualCatagory[index].classList.remove('heighlight');
      }
    })
  }
  return(
    
    <li  onMouseOver={handleHover.bind(this, dispatch, Object.keys(catagory)[0])} className="individualCatagory">
      {Object.keys(catagory)[0]}
    </li>
  );
}

export default IndividualCatagory;