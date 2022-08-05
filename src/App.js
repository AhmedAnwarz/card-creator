import { useState } from "react";
import Card from "./Components/Card";
import "./DarkTheme.css";
import html2canvas from "html2canvas";

export default function App() {
  const [CurrentTheme, setCurrentTheme] = useState(true);
  function toggleTheme() {
    setCurrentTheme((cTheme) => {
      if (cTheme) {
        document.getElementById("card-container").className = "containerLight";
        document.getElementById("user-position").className =
          "user-positionLight";
        document.getElementById("titleID").className = "about-titleLight";
        document.getElementById("detailsID").className = "about-detailsLight";
        document.getElementById("interest-titleID").className =
          "about-titleLight";
        document.getElementById("interest-detailsID").className =
          "about-detailsLight";
        document.getElementById("socialID").className = "social-iconsLight";
        return !cTheme;
      } else {
        document.getElementById("card-container").className = "container";
        document.getElementById("user-position").className = "user-position";
        document.getElementById("titleID").className = "about-title";
        document.getElementById("detailsID").className = "about-details";
        document.getElementById("interest-titleID").className = "about-title";
        document.getElementById("interest-detailsID").className =
          "about-details";
        document.getElementById("socialID").className = "social-icons";
        document.querySelectorAll("social--iconLight").className =
          "social--icon";
        return !cTheme;
      }
    });
  }

  const handleDownloadImage = async () => {
    const element = document.getElementById("card-container");
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    link.href = data;
    link.download = "image.png";
    //console.log(canvas)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="main-body">
      <div className="btn-group">
        <button className="change-theme-btn" onClick={toggleTheme}>
          Change Theme
        </button>
        <button className="change-theme-btn" onClick={handleDownloadImage}>
          Export as PNG
        </button>
      </div>

      <Card />
    </div>
  );
}
