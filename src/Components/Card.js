import Info from "./Info";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

export default function Card() {
  
  return (
    <div id="card-container" className="container">
      <Info />
      <div className="details-container">
        <About />
        <Interest />
      </div>
      <Footer />
    </div>
  );
}
