
  
import Head from "next/head";

import BannerSlider from '../components/BannerSlider'
import PackageCard from '../components/PackageCard'




import styles from '../styles/Layout.module.scss'




const mountaineering = () => {
    
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


    return (
        <>
            <Head>
                <title>Mountaineering | 14 Peak Expedition</title>

            </Head>

            <BannerSlider />

            <div className={styles.category_intro}>
                <div className="container">
                    <div className={styles.wrap}>
                        <div>
                            <span>Mountain Expedition</span>
                            <h2 className='heading_text'>Climbing the Worlds Highest Mountains</h2>
                        </div>

                        <div>
                            <p>
                                Fourteen Peak Expedition Pvt.Ltd is a full established  high altitude sport company. 
                                It is also among the world largest expedition organizer above 8000 meter mountain 
                                including 14 Peak and Seven Summit in the world. A decade year of experience in the 
                                field of mountaineering. Today, we have a team to coordinate the expedition possible 
                                within reach of normal people.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ducimus provident
                                 in accusantium quidem consequuntur, asperiores mollitia, at dolor consequatur blanditiis
                                  soluta dicta, porro cupiditate odit sequi voluptatum. Magni impedit odio quibusdam, similique,
                                   repellat aliquam temporibus at autem, maiores itaque ipsa totam? Assumenda repudiandae et blanditiis 
                                   atque accusantium dignissimos animi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

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

        </>
        


    )
}

export default mountaineering
