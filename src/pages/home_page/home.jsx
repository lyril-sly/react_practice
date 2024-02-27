import Navbar from "../../components/navbarComponent";
import './home.css'
import image2 from "../../assect/bg2.jpg"
import image1 from "../../assect/bg1.jpg"



export default function HomePage({}){
    return(
        <>
        <Navbar/>
        <div>
       <div className="hero-section">
        <img src={image2} id="sliderImg"/>
       </div>
       <div className="slider">
       <img src={image1} id="imgSlider"/>
       </div>
       <div class="overlay">
         <section  class="banner">
            
                
                <div class="banner-text">
                    <marquee behavior="crawl" direction="left"><h1>Willi Paints</h1></marquee>
                    <p>Breathe Life into your Walls</p>
                    <div class="banner-btn">
                     <button><span>Find Out</span></button>
                     <button class="btn2"><span>Read More</span></button>
                    </div>
                    </div>
            </section>
      </div>
       </div>
        
        </>
    )
}