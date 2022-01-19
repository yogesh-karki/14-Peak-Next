import React, {useRef, useEffect} from 'react'
import styles from '../styles/Layout.module.scss'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const FooterAnimation = () => {
    const topImg= useRef();
    const cloudLeft = useRef();
    const cloudRight = useRef();
    const bottomImg= useRef();
    // const logoText = useRef();
    const slideOne= useRef();
    const slideTwo = useRef();

    const box= useRef();
    const wrap= useRef();
    const title = useRef();

    useEffect(() => {
    

        function myFunc () {
            wrap.current.remove()
        }

        gsap.to(wrap.current, {
            scrollTrigger: {
                trigger: box.current,
                start: 'top top',
                end: "bottom center",
                pin: true,
                // markers: true
            },
            onComplete: myFunc,
            
        })

        gsap.to(title.current, {
            scrollTrigger: {
                trigger: box.current,
                start: 'top top',
                end: "bottom bottom",
                scrub: 2,

            },

            scale: 10
            
        })
    })

    return (
        <section className={styles.footer_animations} ref={box}>
            <div className={styles.wrap} ref={wrap}>
                <h1 ref={title}>14</h1>
                <h3>Peaks Expedition</h3>
                <p>Supporting Mountain Life</p>
            </div>

            <img src="./images/footer/top.png" alt="" ref={topImg} className={styles.top_img} /> 
            <img src="./images/footer/clouds.png" alt="" ref={cloudLeft} className={`${styles.cloud} ${styles.cloud_left} ` } />
            <img src="./images/footer/clouds.png" alt="" ref={cloudRight} className={`${styles.cloud} ${styles.cloud_right} ` } /> 
            <img src="./images/footer/bottom.png" alt="" ref={bottomImg} className={styles.bottom_img} />
            {/* <img src="./images/footer/footer-text.png" alt="" ref={logoText} className={styles.logo_text} /> */}
            <img src="./images/footer/cloud-slides1.png" ref={slideOne} className={`${styles.cloud_slides} ${styles.slideOne} ` } alt="" />
            <img src="./images/footer/cloud-slides2.png" ref={slideTwo} className={`${styles.cloud_slides} ${styles.slideTwo} ` } />
        </section>
    )
}

export default FooterAnimation
