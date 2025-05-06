import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ImageGalaxy from "../assets/image/21438 1.png"
import ImageSamsung from "../assets/image/21438 1 (1).png"
import ImageCard from "../assets/image/21438 1 (2).png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
    {
        id: 1,
        src: ImageGalaxy,
        alt: 'Galaxy S23'
    },
    {
        id: 2,
        src: ImageSamsung,
        alt: 'Samsung A04'
    },
    {
        id: 3,
        src: ImageCard,
        alt: 'Флеш карта'
    },
];

const PromoSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    return (
        <>
            <SliderWrapper>
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <Slide key={slide.id}>
                            <img src={slide.src} alt={slide.alt} />
                        </Slide>
                    ))}
                </Slider>
            </SliderWrapper>
        </>
    );
};

export default PromoSlider;
const SliderWrapper = styled.div`
    overflow: hidden;
    position: relative;
    padding-bottom: 30px; 
    margin-top: 28px;

.slick-dots {
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
}

.slick-dots li button:before {
    font-size: 12px;
    color: #e91e63;
    margin-top: 26px;
    border: none;
}

.slick-dots li.slick-active button:before {
    color: #e91e63;
    border: none;
}
`;

const Slide = styled.div`
img {
    display: block;
    max-width: none;
    height: auto;     
    margin: 0 auto;
    border: none;
    cursor: pointer;
}
`;
