// this is resume
// importgin css for only this component
import './individual_style/ResumeStyle.css';

const Resume = (props) => {

  return (
    <div className="Resume">
       
<div id="doc2" class="yui-t7">
	<div id="inner">
	
		<div id="hd">
			<div class="yui-gc">
				<div class="yui-u first">
					<h1 class="h1Color">Aadil Kelawala</h1>
					<h2 class="h2Heading">Web Developer</h2>
				</div>

				<div class="yui-u">
					<div class="contact-info">
						{/* <h3 class="h3_4Heading"><a id="pdf" href="#">Download PDF</a></h3> */}
						<h3 class="h3_4Heading" ><a class="aStyle" href="mailto:adilkelawala@gmail.com">adilkelawala@gmail.com</a></h3>
						<h3 class="h3_4Heading" >(972) - 497-9078</h3>
					</div>
          {/* <!--// .contact-info --> */}
				</div>
			</div>
      {/* <!--// .yui-gc --> */}
		</div>
    {/* <!--// hd --> */}

		<div id="bd">
			<div id="yui-main">
				<div class="yui-b">

					<div class="yui-gf">
						<div class="yui-u first">
							<h2 class="h2Heading addBottom">Profile</h2>
						</div>
						<div class="yui-u">
							<p class="Pstyle enlarge">
							 Strong in intuitive problem-solving skills.
							 Proficient in XHTML, CSS, JAVASCRIPT, REACT, PHP, and SQL. Eager to implement and launch new projects.
							 Ability to translate business requirements into technical solutions.</p>
						</div>
					</div>
          {/* <!--// .yui-gf --> */}

					<div class="yui-gf removeBottom addMarginBottom">
						<div class="yui-u first">
							<h2 class="h2Heading addBottom">Technical</h2>
						</div>
						<div class="yui-u">
							<ul class="talent">
								<li class="liStyle">XHTML</li>
								<li class="liStyle">CSS</li>
								<li class="liStyle last">Javascript</li>
							</ul>

							<ul class="talent">
								<li class="liStyle">React</li>
								<li class="liStyle">PHP</li>
								<li class="last liStyle">SQL</li>
							</ul>

							<ul class="talent">
								<li class="liStyle">GIT &amp; GITHUB</li>
								<li class="liStyle">WINDOWS 10</li>
								{/* <li class="last liStyle"> </li> */}
							</ul>
						</div>
					</div>
          {/* <!--// .yui-gf--> */}

					<div class="yui-gf removeBottom"> 
						<div class="yui-u first ">
							<h2 class="h2Heading addBottom" >Skills</h2> 
						</div>
						<div class="yui-u skillContainer">
            <ul class="skills"> 
               <li class="liStyle mySkill"> Problem Solving</li>
               <li class="liStyle mySkill"> Math</li>
               <li class="liStyle mySkill"> Good Learner</li>
            </ul>
            <ul class="skills"> 
						<li class="liStyle mySkill"> Critical Thinking</li>
						<li class="liStyle mySkill"> Excellent Googler </li>
						<li class="liStyle mySkill"> Can Read Documentation</li>
            </ul>
            <ul class="skills"> 
						<li class="liStyle mySkill"> Adaptability</li>
						<li class="liStyle mySkill"> Emotional Inteligence</li>
						<li class="liStyle mySkill"> Communication</li>
            </ul>
				      {/* write your skilss here */}
						</div>
					</div>
          {/* <!--// .yui-gf --> */}




					<div class="yui-gf last">
						<div class="yui-u first">
							<h2 class="h2Heading addBottom">Education</h2>
						</div>
						<div class="yui-u">
							<h2 class="h2Heading">Gujarat University - Ahmedabad, Gujarat</h2>
							<h3 class="h3_4Heading">Major, Accounting, Statastic and Economics &mdash; <strong>3.0 GPA</strong> </h3>
						</div>
					</div>
          {/* <!--// .yui-gf --> */}


				</div>
        {/* <!--// .yui-b --> */}
			</div>
      {/* <!--// yui-main --> */}
		</div>
    {/* <!--// bd --> */}

		<div id="ft">
			<p class="Pstyle">Aadil Kelawala &mdash; <a class="aStyle" href="mailto:adilkelawala@gmail.com">adilkelawala@gmail.com</a> &mdash; (972) - 497-9078</p>
		</div>
    {/* <!--// footer --> */}

	</div>
  {/* <!-- // inner --> */}


</div>
{/* <!--// doc --> */}


    </div>
  )
}

export default Resume;

