import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

const ImageSliderAuto = (props) => {
    const SliderProperty = {
        ImageSrc: ''
    }

    const [sliderProperty, setSliderProperty] = useState(SliderProperty);

    const { ImageSrc } = sliderProperty;

    const [countAuto, setCountAuto] = useState(0);


    const [animationCls, setAnimationCls] = useState('displayBlock fade');



    const NextClick = () => {

        setAnimationCls(() => ('displayNone fade'));
        const myTimeout = setTimeout(() => {
            setAnimationCls('displayBlock fade')
        }, 100);

        if (countAuto <= props.ImageData.length - 1) {
            setCountAuto(countAuto + 1);
        }

        if (countAuto === props.ImageData.length - 1) {
            setCountAuto(0);
        }

    };

    useEffect(() => {

        setSliderProperty((previous) => ({ ...previous, ImageSrc: props.ImageData[countAuto].ImageSrc }));

    }, [countAuto]);



    useEffect(() => {

        const interval = setInterval(() => {

            NextClick();

        }, props.SlideInterValTime);

        return () => clearInterval(interval);

    }, [countAuto]);



    return (
        <>
            <div className='slideshow-container '>


                <div className={animationCls}>
                    <img src={ImageSrc} className='imageStyle' alt="Img" />
                </div>
            </div>


        </>

    );
};

export default ImageSliderAuto;