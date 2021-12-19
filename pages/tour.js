import { useRef, useEffect } from "react";
import Head from "next/head";


import { Tabs } from 'antd';
import 'antd/dist/antd.css'

import InnerBanner from '../components/InnerBanner'
import Overview from '../components/TabComponent/Overview'
import Itinerary from '../components/TabComponent/Itinerary'
import Service from '../components/TabComponent/Service'
import UsefulInfo from '../components/TabComponent/UsefulInfo'
import Departures from '../components/TabComponent/Departures'
import Faq from '../components/TabComponent/Faq'
import Gallery from '../components/TabComponent/Gallery'

import {OpenOutline } from 'react-ionicons'

import styles from '../styles/Tour.module.scss'


const { TabPane } = Tabs;

const operations = <button className={styles.book_btn}> <OpenOutline /> Book this trip</button>;




const tour = () => {
 
    const tabTop = useRef();

    
    function callback(key) {
        // console.log(key);
        tabTop.current.scrollIntoView()
        // console.log(tabTop)
    

        
    }
    
    
    useEffect( () => {
        


        var navs = document.querySelector('.ant-tabs-nav')
        var tabSection = document.querySelector('.tour_tabs')

        window.addEventListener('scroll', () => {
            if(tabSection.getBoundingClientRect().top <= 80) {
                navs.classList.add('sticky');
                tabSection.style.paddingTop = "50px";
            }

            else {
                navs.classList.remove('sticky');
                tabSection.style.paddingTop = "0";
            }
        })
    })

    return (
        <>
            <Head>
                <title>Everest Base Camp Via Kalapather | 14 Peak Expedition</title>

            </Head>

            <InnerBanner
                title={'Mountaineering'}
                subtitle={'Mount Everest Expedition'}
                img={'/images/inner-banner1.jpg'}
            />

            <div className="tour_tabs" ref={tabTop}>
                <Tabs defaultActiveKey="1" className="tour-tabs" onChange={callback} tabBarExtraContent={operations}>
                    <TabPane tab="Overview" key="1">
                        <Overview />
                    </TabPane>
                    <TabPane tab="Itinerary" key="2">
                        <Itinerary />
                    </TabPane>
                    <TabPane tab="Services" key="3">
                        <Service />
                    </TabPane>
                    <TabPane tab="Useful Info" key="4">
                        <UsefulInfo />
                    </TabPane>
                    <TabPane tab="Date & Prices" key="5">
                        <Departures />
                    </TabPane>
                    <TabPane tab="FAQ" key="6">
                        <Faq />
                    </TabPane>
                </Tabs>
               
            </div>
        
            <div className={styles.tour_gallery}>
                <Gallery />
            </div>

            

        </>
        


    )
}

export default tour
