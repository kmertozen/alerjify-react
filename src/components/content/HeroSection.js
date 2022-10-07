import React from "react";
import Slider from "react-slick";
import { FaStar,FaAngleLeft,FaAngleRight } from "react-icons/fa";
import {useSite} from '../../context/SiteContext'

function HeroSection() {

const {recipes}=useSite();



  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    className:"awd"
  };

  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
      <div
        className="slick-previo flex flex-col text-center justify-center"
        onClick={onClick}><FaAngleLeft className="mx-auto" /></div>
    );
  }
  function SampleNextArrow(props) {
    const {onClick} = props;
    return (
      <div
        className="slick-nextio flex flex-col text-center justify-center"
        onClick={onClick}><FaAngleRight className="mx-auto"/></div>
    );
  }
  
  return (
    
    <div className="container h-100 wrapper">

      <Slider {...settings}>
      {recipes && recipes.map((recipe, index) => {
                    if (index < 5) {
                        return (
                          <div key={index} className="relative hero">
                          <img className="w-full h-[500px] object-cover" src={`https://www.alerjify.com/images/recipes/${recipe.cuuu}`} alt={recipe.yemek_ad}/>
                          <div className="hero-card">
                            <span className="sub-title"><a href="/">Tatlı</a></span>
                            <h2 className="title">{recipe.yemek_ad}</h2>
                            <div className="mb-6">
                              <ul className="flex mx-auto justify-center text-lg gap-x-1 items-center text-[#d9d9d9]">
                                <li className="single-item star-empty"><FaStar /></li>
                                <li className="single-item star-empty"><FaStar /></li>
                                <li className="single-item star-empty"><FaStar /></li>
                                <li className="single-item star-empty"><FaStar /></li>
                                <li className="single-item star-empty"><FaStar /></li>
                                <li className="text-[#444]"><span>0<span> / 5</span></span> </li>
                              </ul>
                            </div>
                            <p>Folyo ile çerçeveli bir fırın tepsisini hizalayın. (Kırışıklık olmamasına dikkat edin.)&nbsp;Orta boy bir kapta eritilmiş çikolata ve fı...</p>
                          </div>
                        </div>
                        )
                    }else{return null}
                })}
        
        


      </Slider>
    </div>
  )
}

export default HeroSection