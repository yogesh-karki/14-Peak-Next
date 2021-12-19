import  React, { useEffect } from 'react';
import Head from "next/head";


import FooterAnimation from '../components/FooterAnimation'
import {ButtonDark,ButtonWhite } from '../components/Button';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Pagination, Navigation } from "swiper";
SwiperCore.use([FreeMode, Pagination, Navigation]);

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination"
import "swiper/css/navigation"

import styles from "../styles/Home.module.scss";

import { LocationOutline, RibbonOutline, FlowerOutline, FingerPrintOutline } from "react-ionicons";
import Intro from '../components/Intro';





const activityData = [
    {
        img: "./images/mountain.jpg",
        title: "Mountaineering",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque, ducimus tempore nam non voluptates laudantium.",
    },
    {
        img: "./images/trek.jpg",
        title: "Trekking",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptates laudantium.",
    },
    {
        img: "./images/heli.jpg",
        title: "Heli Trek",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque, ducimus tempore nam ",
    },
    {
        img: "./images/double-summit.jpg",
        title: "Double Summit",
        description: "Lorem  doloremque, ducimus tempore nam non voluptates laudantium.",
    },
    {
        img: "./images/seven-sumit.jpg",
        title: "7 summit",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque, ducimus tempore nam non voluptates laudantium.",
    },
    {
        img: "./images/14-peak-special.jpg",
        title: "14 Peak Special",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque, ducimus tempore nam non voluptates laudantium.",
    },
];

const MarkerData = [
    {
        id: 1,
        region: "Everest Region",
        top: "69%",
        left: "81%",
    },
    {
        id: 2,
        region: "Kanchanjunga Region",
        top: "67%",
        left: "97%",
    },
];

const mapChoose = [
    {
        title: "Unlimited Pacakge",
        description: "Build a tailor made trip in less time",
        icon: <RibbonOutline />,
    },

    {
        title: "Easy Booking",
        description: "Build a tailor made trip in less time",
        icon: <FlowerOutline />,
    },

    {
        title: "Service Booking",
        description: "Build a tailor made trip in less time",
        icon: <FingerPrintOutline />,
    },
];

const StoryData = [
    {
        img: "./images/story/story-tashi.jpg",
    },

    {
        img: "./images/story/story-mike.jpg",
    },

    {
        img: "./images/story/story-tenzin.jpg",
    },

    {
        img: "./images/story/story-vennsa.jpg",
    },
];

const TestimonialData = [
  {
      img: './images/story/sophie.png',
      name: 'Sophie Lavaud',
      profession: 'Swiss / French ',
      testimonial: '“This is now several seasons that I’m climbing peaks above 8000 meters with Seven Summit Treks and I succeed many expeditions with them. '
  },

  {
      img: './images/story/story-mike.jpg',
      name: 'Mike Posner',
      profession: 'American Singer',
      testimonial: '“This is now several seasons that I’m climbing peaks above 8000 meters with Seven Summit Treks and I succeed many expeditions with them.'
  },
  {
    img: './images/story/sophie.png',
    name: 'Sophie Lavaud',
    profession: 'Swiss / French ',
    testimonial: '“This is now several seasons that I’m climbing peaks above 8000 meters with Seven Summit Treks and I succeed many expeditions with them. '
    },

    {
        img: './images/story/story-mike.jpg',
        name: 'Mike Posner',
        profession: 'American Singer',
        testimonial: '“This is now several seasons that I’m climbing peaks above 8000 meters with Seven Summit Treks and I succeed many expeditions with them.'
    },
]

const UpdateData = [
  {
      img : './images/latest5.jpg',
      title: 'MT. Amadablam Expedition 2021',
      description: 'Never too late to join us. Open departure from Kathmandu ( 05 Oct - 05Nov ). There will be fixed camp set in every individual camps.'
  },
  {
      img : './images/latest3.jpg',
      title: 'Himling Himal Expedition',
      description: 'Are you willing to join us for two night Stay at Everest Base Camp? During this shoulder expedition season in spring at Everest Base Camp'
  },

  {
      img : './images/latest2.jpg',
      title: 'Manasalu Expedition',
      description: '  It is more distinctive than any other treks due to its, rich culture, pleasant salient feature and natural scenery. This trek leads you to North West of Pokhara through villages, glaciers, gorges and water falls'
  },
  {
      img : './images/latest1.jpg',
      title: 'Mount Annapurna Summit',
      description: 'Are you willing to join us for two night Stay at Everest Base Camp? During this shoulder expedition season in spring at Everest Base Camp'
  },
  {
      img : './images/latest4.jpg',
      title: '1 Night Stay EBC Stay',
      description: 'Everest base camp trek ( EBC Trek) is a great introductory lodge trek that offer sensational mountain views and an insight into the lives of the Sherpa people.'
  }
]

const IntroData = {
    title: 'Love and Persistence in climbing mountains',
    paragraphOne: 'When it comes to scaling the peaks, dangers are plenty. Although the mountains seem serene and gentle from a distance, the weather there this treacherous. The terrain can be downright unforgiving and to have someone accompanying you',
    paragraphTwo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, quasi. Animi deserunt corrupti non enim exercitationem optio debitis aliquam, iste omnis ex sint, dolorem molestiae sequi! Dolorum labore praesentium illum!',
    image: './images/intro-img.jpg'
}

export default function Home() {

   useEffect(() => {

    let swiperBtnNext = document.querySelectorAll('.swiper-button-next')
    let swiperBtnPrev = document.querySelectorAll('.swiper-button-prev')
    
    let swiperBtnContent = `
                            <div>
                                <span >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"><path d="M0 11.1h25.86L16.97 20c0 .04.91.92.91.91l10-10c0-.01.01-.01.02-.02l.04-.04c.01-.01.02-.02.02-.03.01-.01.02-.03.03-.05.01-.01.01-.03.02-.04 0-.01.01-.02.01-.03v-.02c.01-.01.01-.03.01-.04 0-.02.01-.03.01-.05 0-.01 0-.03.01-.04 0-.02 0-.03.01-.05v-.05-.05c0-.02 0-.03-.01-.05 0-.01 0-.03-.01-.04 0-.02-.01-.03-.01-.05 0-.01-.01-.03-.01-.04 0-.01 0-.01-.01-.02 0-.01-.01-.02-.02-.03-.01-.01-.01-.03-.02-.04-.01-.02-.02-.03-.03-.05-.01-.01-.02-.02-.02-.03-.01-.01-.02-.03-.04-.04.01 0 0-.01 0-.01l-10-10c0-.01-.91.91-.91.91l8.89 8.9H0v1.29z" fill="#333"></path></svg>
                                </span>
                            </div>`;
    

    swiperBtnNext.forEach(next => {
        next.innerHTML =   swiperBtnContent;
    });

    swiperBtnPrev.forEach(prev => {
        prev.innerHTML = swiperBtnContent;
    });
        
    
   })

    return (
        <>
            <Head>
                <title>14 Peak Expedition</title>
            </Head>

            <section className={styles.banner}>
                <div className={styles.video_container}>
                    <video className={styles.featured_video} poster="" autoPlay="autoPlay" playsInline="playsInline" muted loop="loop">
                        <source src="./images/videos/4 shots.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className={styles.banner_text} >
                    <h1>New Perspective In beautiful mountains.</h1>
                </div>

                <div className={styles.search_bar}>
                    <input type="text" placeholder="Discover Your Adventure..." />
                    <button><img src="images/assets/right-arrow.svg" alt="" /></button>
  
                </div>
            </section>

            <Intro 
                title={IntroData.title} 
                paragraphOne={IntroData.paragraphOne}
                paragraphTwo={IntroData.paragraphTwo}
                image={IntroData.image}

            />            

            <section className={styles.activities}>
                <div className="container">
                    <div className={`${styles.activity_head} mb-show`}>
                        <h4 className="heading_text">Expedition Services</h4>
                        <p>Achieve your goal and dream. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aperiam?</p>
                    </div>
                </div>

                <Swiper
                 spaceBetween={30} 
                 className= {`${styles.activities_slides} gbl-act-slider`}
                 navigation={true}
                 breakpoints={{
                    "640": {
                        "slidesPerView": 1,
                        "spaceBetween": 0
                    },
                    "768": {
                        "slidesPerView": 2,
                        "spaceBetween": 15
                    },
                    "1024": {
                        "slidesPerView": 3,
                        "spaceBetween": 30
                    },
                    "1400": {
                        "slidesPerView": 3.75,
                        "spaceBetween": 30
                    }
                 }}  
                >
                    <SwiperSlide className={styles.wrap}>
                        <div className={styles.activity_slide}>
                            <div className={styles.activity_head}>
                                <h4 className="heading_text">Expedition Services</h4>
                                <p>Achieve your goal and dream. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aperiam?</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    {activityData.map((data, index) => {
                        return (
                            <SwiperSlide className={styles.wrap} key={index}>
                                <div className={styles.activity_slide}>
                                    <figure>
                                        <img src={data.img} alt="" />
                                    </figure>

                                    <div className={styles.slide_content}>
                                        <h4>{data.title}</h4>
                                        
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
              
            </section>

            <section className={styles.destination} style={{ backgroundImage: "url('/images/destinations-background.png')" }}>
                <div className="container">
                    <div className={styles.destination_head}>
                        <span className="heading-subtitle">Experince Awaits</span>
                        <h4 className="heading_text">Choose Your Dream Destination</h4>
                    </div>

                    <div className={styles.nepal_map}>
                        <img src="./images/nepal.png" alt="" />

                        {MarkerData.map((val, index) => {
                            return (
                                <div className={styles.marker_region} key={index} style={{ top: val.top, left: val.left }}>
                                    <div className={styles.marker_icon}>
                                        <LocationOutline />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.choose}>
                        {mapChoose.map((val, index) => {
                            return (
                                <div className={styles.ch_item} key={index}>
                                    {val.icon}

                                    <div className={styles.icon_inner}>
                                        <h4>{val.title}</h4>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className={styles.stories} style={{ backgroundImage: "url('/images/star-background.jpg')" }}>
                <div className="container">
                    <div className={styles.story_article}>
                        <div className={styles.story_header}>
                            <span className="heading_subtitle">Overcoming Fears</span>
                            <h4 className="heading_text">Inspriring Stories</h4>
                            <p>Inspirational Stories Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quibusdam saepe corrupti corporis dignissimos consequuntur maxime fugiat, voluptate quia</p>
                        </div>

                        <div className={styles.story_right}>
                            {StoryData.slice(0, 2).map((val, index) => {
                                return (
                                    <figure className={styles.media_story} key={index}>
                                        <img src={val.img} alt="" />

                                        <div className={styles.story_play}>
                                            <a href="#">
                                                <img src="./images/assets/play.svg" alt="" />
                                            </a>
                                        </div>
                                    </figure>
                                );
                            })}
                        </div>

                        <div className={styles.story_left}>
                            {StoryData.slice(2, 5).map((val, index) => {
                                return (
                                    <figure className={styles.media_story} key={index}>
                                        <img src={val.img} alt="" />

                                        <div className={styles.story_play}>
                                            <a href="#">
                                                <img src="./images/assets/play.svg" alt="" />
                                            </a>
                                        </div>
                                    </figure>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.tailor}>
                <div className="container">
                    <div className={styles.tm_wrap}>
                        <div className={styles.tm_article} style={{ backgroundImage: "url('/images/tailor-made.png')" }}>
                            <div className={styles.tm_article_wrap}>
                              <h4 className="heading_text">An Idea? A travel Plan?</h4>
                              <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis cum maxime at soluta delectus repudiandae quibusdam culpa, dolorum quod molestiae repudiandae officiis?
                              </p>
                              <p>
                              Eaque quam cum, expedita, qui tempore cumque quod obcaecati nihil nostrum possimus totam!
                              </p>
                            </div>
                        </div>

                        <div className={styles.testimonial}>
                          <div className={styles.twrap}>
                            <h4 className="heading_text">Our Travelers</h4>
                          </div>

                            <Swiper 
                             spaceBetween={0}  
                             className= {`${styles.testimonial_slides} testimonial_slides` }
                             pagination={{
                             "dynamicBullets": true,
                             "className": styles.pagination
                             }}
                            >
                              {
                                TestimonialData.map((val,index) => {
                                  return (
                                    <SwiperSlide key={index}>
                                      <div className={styles.testimonial_item}>
                                        <div className={styles.ti_img}>
                                          <img src={val.img} alt="" />
                                        </div>

                                        <div className={styles.ti_desc}>
                                          <h5>{val.name }</h5>
                                          <span>{val.profession} </span>
                                          <p>{val.testimonial } </p>
                                          <ButtonWhite />
                                        </div>

                                        
                                      </div>
                                    </SwiperSlide>
                                  )
                                })
                              }
                          </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.featured}>
              <div className="container">
                <div className={styles.featured_head}>
                  <span className="heading_subtitle">Never to late to join us</span>
                  <h4 className="heading_text">Latest Update</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit . 
                  Est officia provident veniam quod natus consequatur architecto ullam ipsa, aliquid earum?</p>            
                </div>
              </div>

                <Swiper 
             
                 spaceBetween={30} 
                 className={`${styles.latest_slider} gbl-act-slider`}
                 navigation={true}
                 breakpoints={{
                    "640": {
                        "slidesPerView": 1,
                        "spaceBetween": 0
                    },
                    "768": {
                        "slidesPerView": 2,
                        "spaceBetween": 15
                    },
                    "1024": {
                        "slidesPerView": 3,
                        "spaceBetween": 30
                    },
                    "1400": {
                        "slidesPerView": 3.5,
                        "spaceBetween": 30
                    }
                 }}  
                 
                 >
                  {
                    UpdateData.map((val, index) => {
                        return (
                            <SwiperSlide key={index}>
                              <div className={styles.latest_item}>
                                  <div className={styles.latest_img}>
                                      <img src={val.img} alt="" />
                                  </div>

                                  <h5>{val.title}</h5>
                                  <p>
                                      {val.description}
                                  
                                  </p>

                                  <ButtonDark btnText={'Discover Trip'} />
                              </div>

                            </SwiperSlide>
                        )
                    })
                  }
                </Swiper>
            </section>

            <FooterAnimation />

        </>
    );
}
