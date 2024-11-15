import React from 'react';
import "./about.css"; 
import foto from "./foto.jpg";

function About() {
  return (
    <div className="about-container">
      <h1>About me </h1>
      
      <div className="profile-info">
       
        <img 
          src={foto} 
          alt="Foto de perfil"
          className="profile-photo"
        />
        
        <div className="info">
         
          <h2>Gerardo Trujillo</h2>
          
          
         
          <p>
            <strong>Email: </strong> 
            <a href="mailto:rod.jairo19@gmail.com">rod.jairo19@gmail.com</a>
          </p>
        </div>
      </div>
      
  
      <p>
        My name is Gerardo Trujillo  Im a Jr javascript developer that working  develop issues with HTML, CSS, Javacript and React. 
        Currently Im Studing Js and Java FullStack in Generation Mexico. 
      </p>
    </div>
  );
}

export default About;