import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <h1><i className="fa-solid fa-person-running fa-fade text-dark ps-4 m-4"></i><b>OVER<span className='text-secondary'>DRIVE</span></b></h1>

            <Slider {...settings} >
                <div>
                    <img className='' src='first-bike.jpg' style={{ height: '550px', width: '100%' }}></img>
                </div>
                <div>
                    <img className='' src='second-bike.jpg' style={{ height: '550px', width: '100%' }}></img>
                </div>
                <div>
                    <img className='' src='third-bike.jpg' style={{ height: '550px', width: '100%' }}></img>
                </div>
            </Slider>
        </>
    )
}

export default ImageSlider