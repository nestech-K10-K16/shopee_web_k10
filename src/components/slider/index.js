import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { test } from '../../assets';
import './style.css';
import SliderItem from './slideritem';

const Slider = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            responsive={responsive}
            showDots={true}
            swipeable={true}
            centerMode={false}
            slidesToSlide={1}
            itemClass='carousel-item'
            arrows={false}
        >
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
        </Carousel>
    )
}

export default Slider