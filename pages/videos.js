import {useRef, useEffect} from 'react'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import InnerBanner from '../components/InnerBanner'
import styles from '../styles/Video.module.scss'
import Pagination from '../components/Pagination';


const videos = () => {

    const videoData = [
        {
            img: "./images/news1.jpg",
            title: "Union Glacier - The expedition to Antarctica (the last degree ) ",
            category: "Main-video"
        },
        {
            img: "./images/full-width.jpg",
            title:"Everest Exxpedition 2021",
            category: "Expedition Video"
        },
        {
            img: "./images/intro-img.jpg",
            title:"Everest Exxpedition 2021",
            category: "Expedition Video"
        },
        {
            img: "./images/intro-mountain.jpg",
            title:"Everest Exxpedition 2021",
            category: "Expedition Video"
        },
        {
            img: "./images/lake.jpg",
            title:"Everest Exxpedition 2021",
            category: "Expedition Video"
        },

    ]
   
 
    const mainvideo = videoData.filter((item) => {
        return item.category === "Main-video"
    })

  
   

    return (
        <>
            <InnerBanner
                title={'Videos'}
                subtitle={'Watch our videos'}
                img={'/images/everest-bg.jpg'}
            />

            <section className={styles.video}>
                <div className="container-small">
                    <div className={styles.wrap}>
                        <div className={styles.main_video}>
                            <div className={styles.img}>
                                <img src={mainvideo[0].img } alt="" />

                                <a href="">
                                    <img src="./images/youtube.svg" alt="" />
                                </a>
                            </div>

                            <div className={styles.title}>
                                <h5>{mainvideo[0].title} </h5>
                            </div>
                        </div>

                    </div>

                    <div className={styles.smaller_sections}>
                        <div className="row spacing">
                            {
                                videoData.map((val,index) => {
                                    return(
                                        <div className="col-md-6" key={index}>
                                            <div className={styles.wrap}>
                                                <div className={styles.img}>
                                                    <img src={val.img } alt="" />

                                                    <a href="">
                                                        <img src="./images/youtube.svg" alt="" />
                                                    </a>
                                                </div>

                                                <div className={styles.title}>
                                                    <h5>{val.title} </h5>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            <Pagination />


        </>

    )
}

export default videos
