import { useState } from "react";
import Card from "./Components/Card";
import "./DarkTheme.css"

export default function App() {
  const [CurrentTheme, setCurrentTheme] = useState(true);
  function toggleTheme(){
    setCurrentTheme((cTheme)=>{
      if(cTheme){
        document.getElementById("card-container").className = "containerLight";
        document.getElementById("user-position").className = "user-positionLight";
        document.getElementById("emailbtn").className = "email-buttonLight";
        document.getElementById("titleID").className = "about-titleLight";
        document.getElementById("detailsID").className = "about-detailsLight";
        document.getElementById("interest-titleID").className = "about-titleLight";
        document.getElementById("interest-detailsID").className = "about-detailsLight";
        document.getElementById("socialID").className = "social-iconsLight";
        document.querySelectorAll("social--icon").className = "social--iconLight";


        
        return !cTheme;
      }
      else{
        document.getElementById("card-container").className = "container";
        document.getElementById("user-position").className = "user-position";
        document.getElementById("emailbtn").className = "email-buttonLight";
        document.getElementById("titleID").className = "about-title";
        document.getElementById("detailsID").className = "about-details";
        document.getElementById("interest-titleID").className = "about-title";
        document.getElementById("interest-detailsID").className = "about-details";
        document.getElementById("socialID").className = "social-icons";
        document.querySelectorAll("social--iconLight").className = "social--icon";
        
        return !cTheme;
      
      }
    })
  }
  return (
    <div className="main-body">
      <Card />
      <button className="change-theme-btn" onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}
