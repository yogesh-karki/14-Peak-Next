import { Swiper, SwiperSlide } from "swiper/react";

import styles from '../../styles/Tour.module.scss'

import "swiper/css";

const galleryData = ['./images/videos/4 shots.mp4',
                    './images/gallery/3.jpg',
                    './images/gallery/4.jpg' ,
                    './images/gallery/5.png',
                    './images/intro-img.jpg',
                    './images/gallery/2.jpg',
                    
                ]


const Gallery = () => {


    return (
        <div>

            <Swiper slidesPerView={'auto'} spaceBetween={30}  className="gallery">

                <SwiperSlide  >
                    <div className={styles.gallery_item} >
                        <video className={styles.gallery_video} poster="" autoPlay="autoPlay" playsInline="playsInline" muted loop="loop">
                            <source src={galleryData[0]} type="video/mp4" />
                        </video>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className={styles.gallery_item}>
                        {
                            galleryData.slice(1, 3).map( (val, index) => {
                                return (
                                    <div className={styles.item_photo_top} key={index}>
                                        <img src={val} alt="" />
                                    </div>
                                )
                            })
                        }

                    </div>
                </SwiperSlide>

                {
                    galleryData.slice(3).map( (val, index) => {
                        return (
                            <SwiperSlide  key={index}>
                                <div className={styles.gallery_item} >
                                    <img src={val} alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

         

            </Swiper>


        </div>
    )
}

export default Gallery
