import React from "react";
import banner2 from '../assets/imagenes/banner2.jpg'
const Banner = ()=>{
    return(
        <div className="container"style={{marginTop:20,marginBottom:20}}>
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="..."/>
    </div>
  </div>
  
</div>

        </div>
    )
}

export default Banner