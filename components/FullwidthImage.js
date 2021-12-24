import {useRef, useEffect} from 'react'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import styles from '../styles/Layout.module.scss'

const FullwidthImage = () => {
    const box = useRef();
    const img = useRef();

    useEffect(()=> {
        gsap.to(img.current, {
            scrollTrigger: {
                trigger: box.current,
                start: 'top center+=25%',
                scrub: 3,
            },
            scale: 1.24
        })
    })

    return (
        <section className={styles.fullwidth} ref={box}>
            <figure>
                <img src="./images/full-width.jpg" ref={img} alt="" /> 
            </figure>
        </section>
    )
}

export default FullwidthImage
