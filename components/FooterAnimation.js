import React, {useRef} from 'react'
import styles from '../styles/Layout.module.scss'


const FooterAnimation = () => {
    const topImg= useRef();
    const cloudLeft = useRef();
    const cloudRight = useRef();
    const bottomImg= useRef();
    const logoText = useRef();
    const slideOne= useRef();
    const slideTwo = useRef();

    return (
        <section className={styles.footer_animations}>
            <img src="./images/footer/top.png" alt="" ref={topImg} className={styles.top_img} /> 
            <img src="./images/footer/clouds.png" alt="" ref={cloudLeft} className={`${styles.cloud} ${styles.cloud_left} ` } />
            <img src="./images/footer/clouds.png" alt="" ref={cloudRight} className={`${styles.cloud} ${styles.cloud_right} ` } /> 
            <img src="./images/footer/bottom.png" alt="" ref={bottomImg} className={styles.bottom_img} />
            <img src="./images/footer/footer-text.png" alt="" ref={logoText} className={styles.logo_text} />
            <img src="./images/footer/cloud-slides1.png" ref={slideOne} className={`${styles.cloud_slides} ${styles.slideOne} ` } alt="" />
            <img src="./images/footer/cloud-slides2.png" ref={slideTwo} className={`${styles.cloud_slides} ${styles.slideTwo} ` } />
        </section>
    )
}

export default FooterAnimation
