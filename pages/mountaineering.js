
  
import Head from "next/head";

import Intro from '../components/Intro';
import BannerSlider from '../components/BannerSlider'
import PackageCard from '../components/PackageCard'




import styles from '../styles/Layout.module.scss'
import ThreeColFacts from "../components/ThreeColFacts";




const mountaineering = () => {
    
    const IntroData = {
        title: 'Climbing the Worlds Highest Mountains',
        paragraphOne: 'Fourteen Peak Expedition Pvt.Ltd is a full established high altitude sport company. It is also among the world largest expedition organizer . A decade year of experience in the field of mountaineering.  ',
        paragraphTwo: 'Today, we have a team to coordinate the expedition possible within reach of normal people. Molestiae ducimus provident in accusantium quidem consequuntur, asperiores mollitia, at dolor consequatur.',
        image: './images/intro-mountain.jpg'
    }

    const packageData = [
        {
            title: 'Mount Everest Expedition',
            image: './images/mountain1.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem reiciendis quam sed dolores, voluptatum mollitia tempora ipsa!',
            category: 'Mountaineering',
            subCategory: '8000',
        },

        {
            title: 'K-2 Expedition ',
            image: './images/k2.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem reiciendis quam sed dolores, voluptatum mollitia tempora ipsa!',
            category: 'Mountaineering',
            subCategory: '8000',
        },
        {
            title: 'Mount Kanchenjunga Expedition ',
            image: './images/kanchanjunga.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem reiciendis quam sed dolores, voluptatum mollitia tempora ipsa!',
            category: 'Mountaineering',
        },
        {
            title: 'Manaslu Expedition ',
            image: './images/manaslu.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem reiciendis quam sed dolores, voluptatum mollitia tempora ipsa!',
            category: 'Mountaineering',
            subCategory: '7000',
        },
    ]

    const data = [
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

    return (
        <>
            <Head>
                <title>Mountaineering | 14 Peak Expedition</title>

            </Head>

            <BannerSlider />

            <Intro 
                title={IntroData.title} 
                paragraphOne={IntroData.paragraphOne}
                paragraphTwo={IntroData.paragraphTwo}
                image={IntroData.image}

            />  

            <div className={styles.search_card}>
                <div className="container">
                    <div className={styles.search}>
                   
                            <a className={`${styles.search_btns} ${styles.active}`} >
                                All Expeditions
                            </a>

                            <a className={styles.search_btns} >
                                Abover 8000m
                            </a>

                            <a className={styles.search_btns} >
                                Abover 7000m
                            </a>

                            <a className={styles.search_btns} >
                                Abover 6000m
                            </a>
                      
                    </div>
                </div>
            </div>

            <div className={styles.list_cards}>
                <div className="container">
                    <div className="row spacing">
                        {
                            packageData.map((val, index) => {
                                return(
                                    <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                                        <PackageCard title={val.title} image={val.image} category={val.category} subCategory= {val.subCategory} />
                                    </div>
                                )
                            })
                        }

                    </div>

                    
                </div>
            </div>

            <div className="auto-padding">
                <ThreeColFacts factData={data} />
            </div>

        </>
        


    )
}

export default mountaineering
