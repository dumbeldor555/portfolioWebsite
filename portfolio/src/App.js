import Provider from './Context';
import {Consumer} from './Context';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// importing css here
import './App.css';


// importing layout and components 
import NavBar from './layouts/NavBar';
import Intro from './layouts/Intro';
import Projects from './components/Projects';
import Footer from './layouts/Footer';
import ProjectsByCatagory from './layouts/ProjectsByCatagory';
import AboutMe from './components/AboutMe';


function App() {
 
  return (
      <Provider>
        <Router >
          <Route path="/" exact >
            <Consumer>
                {value => {
                  const {myName, data, dispatch, curruntCatagory, contactInfo} = value;
                    return(
                      <div className="App">
                        <NavBar dispatch={dispatch} />
                        <Intro myName={myName}/>
                        <Projects dispatch={dispatch} data={data}/>
                        <ProjectsByCatagory  curruntCatagory={curruntCatagory}/>
                        <Footer contactInfo={contactInfo} />
                      </div>  
                    );
                }}
              </Consumer>
          </Route>
          <Route path="/about" exact>
          <Consumer>
                {value => {
                  const {myStory, dispatch, showStory, showResume, aboutBackgroundHeight, myName} = value;
                    return(
                      <AboutMe 
                      myStory={myStory} 
                      showResume={showResume} 
                      showStory={showStory} 
                      dispatch={dispatch} 
                      aboutBackgroundHeight={aboutBackgroundHeight} 
                      name={myName}
                      />
                    );
                }}
              </Consumer>
          </Route>
        </Router>
      </Provider>

  );
}

export default App;
