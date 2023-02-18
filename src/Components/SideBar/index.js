import React from "react";
import img2 from "../../images/icons.jpeg"
import img1 from"../../images/photo.jpeg"
import './sideBar.css';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ContactPageSharpIcon from '@mui/icons-material/ContactPageSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';


const SideBar = () => {
return(

    
    <div className="mainone">
        
   


<nav>
    <ul>
        <li>  <span><HomeSharpIcon/>home</span></li>
        <br/>
        
        <li> <span>< ContactPageSharpIcon/>contact</span></li>
        <br/>
        
        <li> <span>portfolio</span></li>
        
    
    
    
    </ul>
    
</nav>


<div  className="content">

    <div className="containerr1">
        <div className="card1">
        <h2>HI GUYS...  <span className="h2color">I'M IMMANUVEL RAJ</span></h2>
        <h4 className="roll">FULL STACK  WEB DEVELOPER [MERN]</h4>
          <img className="img1" src={img1} alt="loading"></img>   
          
          </div>
    
    </div>

    <div className="containerr2">
<div className="cardmain">
    <p className="headerbckg">LANGUAGE & COMMUNICATION SKILL</p>

    <div className="langhead">Language Known To Speak:</div>
    <p className="langu">TAMIL,ENGLISH</p>

    <div className="langhead">Language Known To Write:</div>
    <p className="langu">TAMIL,ENGLISH</p>



</div>

<div className="cardmain">
    <p className="headerbckg">TECHNOLOGIES & TOOLS </p>

         <img  className="logos" src={img2}/> 
    
    </div>
<div className="cardmain"> 
    <p className="edu" >EDUCATION</p>

    <div className="langhead">COLLGE NAME:  </div>
    < p className ="langu">M.A.M college of enginering & technology</p>
  
    <div className="langhead">YEAR OF PASSING:  </div>
    <p  className="langu">2022</p>
  
    <div className="langhead">DEPARTMENT: </div>
    <p className="langu">CSE</p>
  
</div>

</div>
<div className="contact">
   
<div className="linkedin"><a href="https://www.linkedin.com/in/immanuvel-raj-179216221"><LinkedInIcon/></a></div>
<div className="linkedin"><a href="https://github.com/Immanvr46"><GitHubIcon /></a></div>
<div className="linkedin"><a href="https://instagram.com/mr_hydro_390__?igshid=NTE5MzUyOTU="><InstagramIcon/></a></div>
<div className="linkedin"><a href="immanvr46@gmail.com">< EmailIcon/></a></div>
<div className="linkedin"><a href="https://wa.me/qr/GTHLPK3IQWAFH1"><WhatsAppIcon/></a></div>

    
</div>
<div className="summaryy">
As a web developer with a strong knowledge of programming languages such as HTML, CSS, and JavaScript, I am experienced in creating and maintaining websites and web applications. I have a deep understanding of web design principles, 
user experience (UX) design, and web security,I am committed to staying up-to-date with the latest trends and technologies in the web development industry and am constantly seeking opportunities to expand my knowledge and skill set,
 I am a detail-oriented and organized team player who is dedicated to delivering high-quality work on time and within budget.
</div>



</div>

</div>
)
}

export default SideBar;