
import {useEffect, useRef } from 'react';
import styles from "../styles/Intro.module.scss";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Intro = (props) => {
    const introHead = useRef();
    const introDiv = useRef();
    const introText = useRef();

    useEffect(() =>{
           
        var introtl =  gsap.timeline({
            scrollTrigger: {
                trigger: introDiv.current,
                start: 'top center+=25%',
            },
            
        });

        introtl.from(introHead.current, {
            opacity : 0,
            y: 100,
            duration: 0.8
        })

        introtl.from(introText.current, {
            opacity : 0,
            y: 80,
            duration: 0.8
        },0.3)
    })

    return (
        <section className={styles.intro} ref={introDiv}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className={styles.intro_head} ref={introHead}>
                            <h4 className="heading_text">{props.title}</h4>
                        </div>

                        <div className={styles.intro_text} ref={introText}>
                            <p >
                                {props.paragraphOne}
                            </p>

                            <p >
                                {props.paragraphTwo}
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={styles.intro_img}>
                            { props.image ? <img src={props.image} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
