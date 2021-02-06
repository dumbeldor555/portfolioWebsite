// this is footer component
const Footer = (props) => {

  const {contactInfo} = props;
  return (
  <div className="section3">
  <h1>Let's work together...</h1>
  <div className="container"> 
    {/* <div className="item"> <h2> <i className="fab fa-facebook"></i> facebook</h2></div> */}
    <div className="item"> <a href={contactInfo.github} target="_blank" > <h2>   <i className="fab fa-github"></i> Github</h2> </a></div>
    {/* <div className="item"><h2><i className="fab fa-twitter-square"></i> twitter</h2></div> */}
    <div className="item"> <a href={contactInfo.Gmail} target="_blank" >  <h2> <i className="fas fa-envelope"></i> Send a mail</h2> </a> </div>
    <div className="item"><h2><i className="fas fa-mobile-alt"></i> Call me</h2></div>
  </div>
  </div>
  );
}

export default Footer;