import  { useRef ,useEffect } from 'react';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import styles from '../../styles/Tour.module.scss'
import { WalkOutline, CameraOutline, AnalyticsOutline } from 'react-ionicons'



const Itinerary = () => {

    const itineraryData = [
        {
            day: '1',
            img: './images/temple.jpg',
            title: 'Arrival in Kathmandu Airport',
            description: 'Upon our arrival at the Tribhuwan International Airport (TIA) in Kathmandu, we will be greeted by a representative from Himalayan Glacier who will take us to our hotel. After checking in, we may take a rest or visit Himalayan Glacier’s office. In the evening there will be a welcome dinner in a traditional Nepali Restaurant where we will be able to enjoy authentic Nepali cuisine with a brief cultural program.Overnight in Kathmandu.',
            facts: [
                {
                    icon: <WalkOutline />,
                    title: 'Hiking',
                    subtitle: '4 Hrs'
                },

                {
                    icon: <CameraOutline />,
                    title: 'Sightseeing',
                    subtitle: 'Kathmandu, Bhaktapur'
                },

                {
                    icon: <AnalyticsOutline />,
                    title: 'MAX ACCENT',
                    subtitle: '2200m'
                }
            ]
        },
        {
            day: '2-3 ',
            img: './images/trek.jpg',
            title: 'Rest in Kathmandu: Tibet Visa Preparation',
            description: 'Upon our arrival at the Tribhuwan International Airport (TIA) in Kathmandu, we will be greeted by a representative from Himalayan Glacier who will take us to our hotel. After checking in, we may take a rest or visit Himalayan Glacier’s office. In the evening there will be a welcome dinner in a traditional Nepali Restaurant where we will be able to enjoy authentic Nepali cuisine with a brief cultural program.Overnight in Kathmandu.',
            facts: [
                {
                    icon: <WalkOutline />,
                    title: 'Hiking',
                    subtitle: '4 Hrs'
                },

                {
                    icon: <CameraOutline />,
                    title: 'Sightseeing',
                    subtitle: 'Kathmandu, Bhaktapur'
                },

                {
                    icon: <AnalyticsOutline />,
                    title: 'MAX ACCENT',
                    subtitle: '2200m'
                }
            ]
        },

        {
            day: '4-8 ',
            img: './images/mount-everest-sunjpg.jpg',
            title: 'Ascend from Intermediate Camp to Advance Basecamp',
            description: 'Upon our arrival at the Tribhuwan International Airport (TIA) in Kathmandu, we will be greeted by a representative from Himalayan Glacier who will take us to our hotel. After checking in, we may take a rest or visit Himalayan Glacier’s office. In the evening there will be a welcome dinner in a traditional Nepali Restaurant where we will be able to enjoy authentic Nepali cuisine with a brief cultural program.Overnight in Kathmandu.',
            facts: [
                {
                    icon: <WalkOutline />,
                    title: 'Hiking',
                    subtitle: '8 Hrs'
                },

                {
                    icon: <AnalyticsOutline />,
                    title: 'MAX ACCENT',
                    subtitle: '6500m'
                }
            ]
        },
        {
            day: '1',
            img: './images/temple.jpg',
            title: 'Arrival in Kathmandu Airport',
            description: 'Upon our arrival at the Tribhuwan International Airport (TIA) in Kathmandu, we will be greeted by a representative from Himalayan Glacier who will take us to our hotel. After checking in, we may take a rest or visit Himalayan Glacier’s office. In the evening there will be a welcome dinner in a traditional Nepali Restaurant where we will be able to enjoy authentic Nepali cuisine with a brief cultural program.Overnight in Kathmandu.',
            facts: [
                {
                    icon: <WalkOutline />,
                    title: 'Hiking',
                    subtitle: '4 Hrs'
                },

                {
                    icon: <CameraOutline />,
                    title: 'Sightseeing',
                    subtitle: 'Kathmandu, Bhaktapur'
                },

                {
                    icon: <AnalyticsOutline />,
                    title: 'MAX ACCENT',
                    subtitle: '2200m'
                }
            ]
        },
        {
            day: '2-3 ',
            img: './images/trek.jpg',
            title: 'Rest in Kathmandu: Tibet Visa Preparation',
            description: 'Upon our arrival at the Tribhuwan International Airport (TIA) in Kathmandu, we will be greeted by a representative from Himalayan Glacier who will take us to our hotel. After checking in, we may take a rest or visit Himalayan Glacier’s office. In the evening there will be a welcome dinner in a traditional Nepali Restaurant where we will be able to enjoy authentic Nepali cuisine with a brief cultural program.Overnight in Kathmandu.',
            facts: [
                {
                    icon: <WalkOutline />,
                    title: 'Hiking',
                    subtitle: '4 Hrs'
                },

                {
                    icon: <CameraOutline />,
                    title: 'Sightseeing',
                    subtitle: 'Kathmandu, Bhaktapur'
                },

                {
                    icon: <AnalyticsOutline />,
                    title: 'MAX ACCENT',
                    subtitle: '2200m'
                }
            ]
        },

        {
            day: '4-8 ',
            img: './images/mount-everest-sunjpg.jpg',
            title: 'Ascend from Intermediate Camp to Advance Basecamp',
            description: 'Upon our arrival at the Tribhuwan International Airport (TIA) in Kathmandu, we will be greeted by a representative from Himalayan Glacier who will take us to our hotel. After checking in, we may take a rest or visit Himalayan Glacier’s office. In the evening there will be a welcome dinner in a traditional Nepali Restaurant where we will be able to enjoy authentic Nepali cuisine with a brief cultural program.Overnight in Kathmandu.',
            facts: [
                {
                    icon: <WalkOutline />,
                    title: 'Hiking',
                    subtitle: '8 Hrs'
                },

                {
                    icon: <AnalyticsOutline />,
                    title: 'MAX ACCENT',
                    subtitle: '6500m'
                }
            ]
        },
        {
            day: '1',
            img: './images/temple.jpg',
            title: 'Arrival in Kathmandu Airport',
            description: 'Upon our arrival at the Tribhuwan International Airport (TIA) in Kathmandu, we will be greeted by a representative from Himalayan Glacier who will take us to our hotel. After checking in, we may take a rest or visit Himalayan Glacier’s office. In the evening there will be a welcome dinner in a traditional Nepali Restaurant where we will be able to enjoy authentic Nepali cuisine with a brief cultural program.Overnight in Kathmandu.',
            facts: [
                {
                    icon: <WalkOutline />,
                    title: 'Hiking',
                    subtitle: '4 Hrs'
                },

                {
                    icon: <CameraOutline />,
                    title: 'Sightseeing',
                    subtitle: 'Kathmandu, Bhaktapur'
                },

                {
                    icon: <AnalyticsOutline />,
                    title: 'MAX ACCENT',
                    subtitle: '2200m'
                }
            ]
        },
        {
            day: '2-3 ',
            img: './images/trek.jpg',
            title: 'Rest in Kathmandu: Tibet Visa Preparation',
            description: 'Upon our arrival at the Tribhuwan International Airport (TIA) in Kathmandu, we will be greeted by a representative from Himalayan Glacier who will take us to our hotel. After checking in, we may take a rest or visit Himalayan Glacier’s office. In the evening there will be a welcome dinner in a traditional Nepali Restaurant where we will be able to enjoy authentic Nepali cuisine with a brief cultural program.Overnight in Kathmandu.',
            facts: [
                {
                    icon: <WalkOutline />,
                    title: 'Hiking',
                    subtitle: '4 Hrs'
                },

                {
                    icon: <CameraOutline />,
                    title: 'Sightseeing',
                    subtitle: 'Kathmandu, Bhaktapur'
                },

                {
                    icon: <AnalyticsOutline />,
                    title: 'MAX ACCENT',
                    subtitle: '2200m'
                }
            ]
        },

        {
            day: '4-8 ',
            img: './images/mount-everest-sunjpg.jpg',
            title: 'Ascend from Intermediate Camp to Advance Basecamp',
            description: 'Upon our arrival at the Tribhuwan International Airport (TIA) in Kathmandu, we will be greeted by a representative from Himalayan Glacier who will take us to our hotel. After checking in, we may take a rest or visit Himalayan Glacier’s office. In the evening there will be a welcome dinner in a traditional Nepali Restaurant where we will be able to enjoy authentic Nepali cuisine with a brief cultural program.Overnight in Kathmandu.',
            facts: [
                {
                    icon: <WalkOutline />,
                    title: 'Hiking',
                    subtitle: '8 Hrs'
                },

                {
                    icon: <AnalyticsOutline />,
                    title: 'MAX ACCENT',
                    subtitle: '6500m'
                }
            ]
        },
    ]

    const card = useRef();
    const mapFrame = useRef();

    useEffect(() => {
   
        ScrollTrigger.create({
            trigger: card.current,
            start: "top top", 
            end: "bottom bottom",
            pin: mapFrame.current,
        });
       
   })

  

    return (
        <div className={styles.tab_content}>
            <div className="container-small">
                <div className={styles.overview}>
                    <div className={styles.tab_heads}>
                        <h4 className="heading_text">Itinerary
                            <span style={{ background: 'url(/images/mount-after-01.svg)' }}></span>
                        </h4>
                    </div>


                </div>
            </div>

            <div className={styles.iti_flex} ref={card}>
                <div className={styles.iti_lists}>
                    <ul className={styles.card_wrap}>
                        {
                            itineraryData.map((val, index) => {
                                return(
                                    <li className={styles.card} key={index}>
                                        <article>
                                            <div className={styles.img}>
                                                <img src={val.img} alt="" />

                                                <span className={styles.day}>Day {val.day }  </span>
                                            </div>

                                            <div className={styles.text}>
                                                <h4>{val.title}</h4>
                                                <p className={styles.overflow}>
                                                    {val.description}    
                                                </p>

                                                <div className={styles.facts}>
                                                    {
                                                        val.facts.map((fact,index) => {
                                                            return (
                                                                <div className={styles.fact_card} key={index}>
                                                                    {fact.icon}

                                                                    <div className={styles.fact_text}>
                                                                        <label >{fact.title}</label>
                                                                        <p>{fact.subtitle}</p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </article>

                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>

                <div className={styles.iti_map} ref={mapFrame}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43470.648210769934!2d86.87708789887311!3d27.981546552031748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2sMt%20Everest!5e0!3m2!1sen!2snp!4v1639119287713!5m2!1sen!2snp"  ></iframe>
                </div>
            </div>

        </div>

    )
}

export default Itinerary
