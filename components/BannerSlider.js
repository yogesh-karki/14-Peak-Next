import {useEffect, useRef} from 'react';


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade"
import styles from '../styles/Layout.module.scss'

import SwiperCore, {Autoplay, EffectFade} from 'swiper';
SwiperCore.use([Autoplay, EffectFade]);


const bgImage = [
                '/images/gallery/5.png',
                'images/inner-banner1.jpg',
                '/images/gallery/4.jpg'
                ];


const BannerSlider = () => {
    const bgScale = useRef();

   

    return ( 
        <section className={styles.banner_slider}>
            <Swiper slidesPerView={1} spaceBetween={0} effect={'fade'}
            speed={3000}
            loop={true}
            autoplay={{
                "delay": 4500,
                }} 
            className={styles.banner_slides}
            >
                {
                    bgImage.map((val, index)=> {
                        return(
                            <SwiperSlide key={index} >

                            
                                <div ref={bgScale} className={styles.item_background} style={{ background: `url(${val})` }}></div>
                            </SwiperSlide>
                        )
                    })
                }

                
            </Swiper>

            <div className={styles.text}>
                <h2>Exploring High Himalayas</h2>
            </div>
        </section>
     );
}
 
export default BannerSlider;