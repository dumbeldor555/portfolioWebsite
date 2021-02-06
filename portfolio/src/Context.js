import React,{Component} from 'react';
import data from './data/data';
const Context = React.createContext();

const reducer = (state, action) => {
  console.log(action.type);
    switch(action.type) {
    case 'HOVER_OVER_CATAGORIES':
               // not sure why the below code is not working 
      // data.forEach((catagory, index)=> {
      //   if(action.catagory === Object.keys(catagory)[0]) {
      //     const catagoryName = Object.keys(catagory)[0];
      //     console.log(catagoryName, action.catagory);
      //     // console.log(state.data[index][catagoryName]);
      //     return{
      //       ...state,
      //       curruntCatagory: state.data[index][catagoryName],
      //       myName: 'aadil'
      //     }
      //   } 
      // });
          if(action.catagory === 'Html&css') {            
            return{
              ...state,
              curruntCatagory: state.data[0]['Html&css']
            
            }
          } else if(action.catagory === 'Javascript') {
            return {
              ...state,
              curruntCatagory: state.data[1].Javascript
              
            }
          } else if(action.catagory === 'React') {

            return {
              ...state,
              curruntCatagory: state.data[2].React
            }
          }
           else if (action.catagory === 'Php') {
            return {
              ...state,
              curruntCatagory: state.data[3].Php
            }
          }
      break;

      case 'HOME_CLICKED' :
        const scrollOptionForHome = {
          left: 0,
          top: 0,
          behavior: 'smooth'
        }
        window.scroll(scrollOptionForHome);
         break;
      case 'WORK_CLICKED' :
       const scrollOptionForWork = {
          left: 0,
          top: 700,
          behavior: 'smooth'
        }
        window.scroll(scrollOptionForWork);
         break;
      case 'CONTACT_CLICKED': 
      const scrollOptionForContact = {
        left: 0,
        top: document.body.clientHeight,
        behavior: 'smooth'
      }
      window.scroll(scrollOptionForContact); 
         break; 
      case 'ABOUT_RESUME':
        if(action.clicked_btn === 'MY_STORY') {
          return {  
            ...state,  
            showStory: !state.showStory,   
            showResume: state.showResume ? false: false,
            aboutBackgroundHeight: state.showStory ? '100vh' : '200vh'  
          } 
        } else if(action.clicked_btn === 'MY_RESUME') {
          return {
            ...state,  
            showResume: !state.showResume,  
            showStory: state.showStory ? false : false,
            aboutBackgroundHeight: state.showResume ? '100vh' : '230vh'
          }  
        } 
          break;
  }

}


class Provider extends Component {

  state = {
    data: data,
    showStory: false,
    showResume: false,
    myName: 'Aadil',
    aboutBackgroundHeight: '100vh',
    myStory: [
      'I was never good at school, always failed in subjects, and disappointed my parents. But that is about to change.',
      'When I turned 18, I had no idea what to do in life, so I applied to Gujarat University for the bachelor of commerce, Because everybody told me so.',
      'But everything changed when I was introduced to the power of the internet when I got my first smartPhone.',
      'From the Internet, I learned pretty much everything. I found myself in a world of curiosity. I was learning, from Survival with Bear Grylls to the freaking Universe with Neil deGrasse Tyson, But one day I stumbled across the video about programming.',
      'And in a split second, I knew this is it. Coding is what I wanna do. and started learning everything I could about Programming  I completed all cs50 lectures, watched so many tutorials from brad Traversy, dev ed, steve Griffith and many more that I don\'t even remember, and Started codding right away.',
      'Initially, I thought learning to code should be a cakewalk considering I learned so much about mathematics already, I mean how hard is it to write if-else statements and for-loops But I soon found out how error- prone I was, I made such silly mistake in my code that I started to doubt that maybe this is not for me and I\'m dumb and all that. it\'s not that writing code is hard it\'s the maintainability and scalability that\'s the challenging part.',
      'So yeah, here I am as a Developer.',
    ],
    defaultNumOfProject: 4,
    contactInfo: {
      github:'https://github.com/aadil42/',
      Gmail:'mailto:adilkelawala@gmail.com',
      phone: '+91-9724979078'
    },
    curruntCatagory: data[1].Javascript,
    highlightCatagory: 'javascript',
    dispatch: (action) => {
      this.setState((state) => {
      return reducer(state, action);

      });
    }
  }
  
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
} 

const Consumer = Context.Consumer;
export default Provider;
export {Consumer}

