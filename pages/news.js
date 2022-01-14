import {useRef, useEffect} from 'react'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import InnerBanner from '../components/InnerBanner'
import styles from '../styles/News.module.scss'

import {ButtonDark } from '../components/Button';
import Pagination from '../components/Pagination';



const news = () => {

    const data = [
        {
            title : 'Three siblings are on union Glacier camp',
            img: './images/news1.jpg',
            date : "2021-12-23",
            link: "/newsDetail"
        },

        {
            title : 'Get your backpack ready for upcoming Amadablam expedition',
            date : "2021-11-20",
            img: './images/news2.jpg',
            link: "/"
        },

        {
            title : 'an expedition on the highest peak of Antarctica , Mount Vinson, 4897m.',
            img: './images/expert-bg.jpg',
            date : "2021-12-11",
            link: "/"
        },

        {
            title : ' K2 Winter Expedition 2020 with our most trusted guide for 8000 meters.',
            img: './images/latest1.jpg',
            date : "2021-8-21",
            link: "/"
        },

        {
            title : 'Built-in with a trust & support of inspiring trekkers & mountaineers around the World 🌎',
            img: './images/our-team.jpg',
            date : "2021-05-12",
            link: "/"
        },

        {
            title : 'Mountaineering moment with 14 Peak Expedition are always a mesmerizing ',
            img: './images/expertise1.jpg',
            date : "2020-12-01",
            link: "/"
        },
    ]

    return (
        <>
            <InnerBanner
                title={'News & Updates'}
                subtitle={'14 Peak Expeditions updates '}
                img={'/images/manaslu.jpg'}
            />

            <section className={styles.news}>
                <div className="container-small">
                    <div className="row spacing">
                        {
                            data.map((val, index) => {
                                return(
                                    <div className="col-md-6" key={index}>
                                        <div className={styles.card}>
                                            <div className={styles.img}>
                                                <img src={val.img} alt="" />
                                                
                                            </div>

                                            <div className={styles.text}>
                                                <h4>{val.title}</h4>
                                                <p>{val.date}</p>

                                               <ButtonDark  link={val.link} btnText={"Read More"} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <Pagination />
                </div>
            </section>

        </>

    )
}

export default news
