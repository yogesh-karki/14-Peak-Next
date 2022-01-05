import {useRef, useEffect} from 'react'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import InnerBanner from '../components/InnerBanner'
import Intro from '../components/Intro'
import VideoPlay from '../components/VideoPlay'
import HeadingFormat from '../components/HeadingFormat'
import FullwidthImage from '../components/FullwidthImage'

import styles from '../styles/About.module.scss'
import ThreeColFacts from '../components/ThreeColFacts';


// import locomotiveScroll from "locomotive-scroll";

const about = () => {

    // useEffect(() => {
    //     if (typeof window === "undefined") {
    //       return;
    //     }
    
    //     const scroll = (locomotiveScroll) => {
    //       new locomotiveScroll.default({
    //         el: scrollRef.current,
    //         smooth: true
    //       });
    //     };
    
    //     return () => scroll.destroy();
    //   }, []);

    const IntroData = {
        title: 'High Altitude Adventure Sport Company',
        paragraphOne: '14 Peak Expedition is a fully established high altitude sport company. It is also among the world’s largest expedition organizer above 8000 meter mountain including 14 Peak and Seven Summit in the world. A decade year of experience in the field of mountaineering.',
        paragraphTwo: 'Today, we have a team to coordinate the expedition possible within reach of normal people. We also do consultant about the mountaineering plan of individual and group from different part of the world.',
        image: './images/mountain1.jpg'
    }

    const TimelineData = {
        title: '14 Peak Expedition through the years',
        paragraphTwo: 'We have been involving in the field of mountaineering. Peak Climbing and trekking since 2013. Now these year of experience made any trip possible in global reach too.',
        paragraphOne: 'Being highly motivated and inspire from the spirit of working experience in the Himalayas made us most valuable company through the year. The Expedition has been perform Nepal, China, Pakistan, Europe, Africa, Argentina and Soon.',
    }
 
    const missionData = [
        {
            id: '01',
            title: '8000 meters mountain under same roof',
            mission: 'To make all 8000 meters mountain under same roof top for expedition in all season. Today, we are selling the all type of mountaineering and trekking package through out the year'
        },
        {
            id: '02',
            title: 'Global Exposure to the world record breaker',
            mission: 'Global Exposure to the amateur alpinist and world record breaker. Recently, we have good number of “ Guinness Book World Record Holder “ in our agency as brand consultant and working field.'
        },
        {
            id: '03',
            title: 'High altitude Expedition Leader',
            mission: 'To built high altitude Expedition Leader in all around the world. From the past decade of service we were successful in making a leader around the world and the work progress is also going well.'
        },
        {
            id: '04',
            title: 'Experience guide through work experiences',
            mission: 'To make the high altitude Sherpa more experiences and qualified for any circumstance. Also, to uplift the needs of market with proper and experience guide through work experiences. '
        }
    ]

    const factData = [
        {
            title: '8000m Mountain Expedition',
            number: '2000',
            text: 'More than 2000 individual have scaled 8000 meters mountain in the Himalayas.'
        },
        {
            title: 'Peak Climbing',
            number: '5000',
            text: 'Starting from the beginner to the professional Climber more than 5000 individual have scaled peak.'
        },
        {
            title: 'Trekking',
            number: '10000',
            text: 'More than 10,000 people have done trekking with us in the Himalayas of Nepal.'
        }
    ]


    const abtBox = useRef();
    const cardBox =  useRef([]);
    cardBox.current= [];
    const title = useRef();
    const text = useRef();
    const video = useRef();

    const addToRefs = (el) => {
       if(el && !cardBox.current.includes(el)) {
            cardBox.current.push(el)
       }
       
    }

    useEffect(() => {
    
        ScrollTrigger.create({
            trigger: abtBox.current,
            start: "top top+=10%", 
            end: "bottom+=5% bottom",
            pin: video.current
        });

        cardBox.current.forEach((el)=> {
            gsap.fromTo(el, {
                autoAlpha: 0,
                y: 50,
                scale: 0.85
            }, {
                duration: 0.8, 
                y: 0,
                autoAlpha: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: el,
                    start: 'top center',
                    toggleActions: 'play reset restart reverse',
                },
            })
        })


    })

    
    

    return (
        <>
            <InnerBanner
                title={'About'}
                subtitle={'Introduction to 14 Peak Expeditions'}
                img={'/images/manaslu.jpg'}
            />

            <Intro 
                title={IntroData.title} 
                paragraphOne={IntroData.paragraphOne}
                paragraphTwo={IntroData.paragraphTwo}
                image={IntroData.image}
            />
            
            <section className={styles.mission_wrap} ref={abtBox} >
                <div className="container">
                    <div className={styles.wrap}>
                        <div className={styles.mission}>
                            <HeadingFormat 
                                title={"Our Mission"}
                                text= {"Achieve your 14 X 8000 meters world highest peak expeditions service within your reach at once."}
                            />

                            <div className={styles.cards}>
                                {
                                    missionData.map((val, index) => {
                                        return (
                                            <div className={styles.card} key={index} ref={addToRefs}>
                                                <div className={styles.title} ref={title}>
                                                    <h3>{val.id}</h3>
                                                    <h5>{val.title}</h5>
                                                </div>

                                                <p ref={text}>
                                                    {val.mission}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className={styles.video} ref={video}>
                            <VideoPlay />
                        </div>
                    </div>

                </div>
            </section>

            <FullwidthImage />

            <section className={styles.timeline}>
                <ThreeColFacts factData={factData} />
            </section>
        </>

    )
}

export default about
