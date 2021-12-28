

import {useRef, useEffect} from 'react'

import styles from '../styles/Layout.module.scss'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




const HeadingFormat = (props) => {
    const box = useRef();
    const subtitle = useRef();
    const title = useRef();
    const text = useRef();



    useEffect(() =>{

        let tl =  gsap.timeline({
            scrollTrigger: {
                trigger: box.current,
                start: 'top center+=25%',
       
              
            },
        });

        if(subtitle.current ) {
            tl.from(subtitle.current, {
                opacity: 0,
                yPercent:100,
                duration: 0.4
            })
        }

        

        tl.from(title.current, {
            opacity : 0,
            y: 40,
            duration: 0.6
        },-0.5)

        if(text.current) {
            tl.from(text.current, {
                opacity : 0,
                y: 20,
                duration: 0.4
            }, 0.5)
        }


    });

    return (
        <div className={`${styles.head} heading-format`} ref={box} >
            {props.subtitle ? <div className={ styles.subtitle}><span className="heading_subtitle" ref={subtitle}>{props.subtitle}</span></div>: "" }

            <h4 className="heading_text" ref={title}>{props.title}</h4>
            <p ref={text}>
                {props.text}
            </p>
        </div>
    )
}

export default HeadingFormat
