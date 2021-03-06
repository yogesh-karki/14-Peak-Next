import {useRef,useState , useEffect} from 'react'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import InnerBanner from '../components/InnerBanner'
import styles from '../styles/News.module.scss'

import { CloseOutline } from 'react-ionicons'

import Pagination from '../components/Pagination';



const testimonial = () => {

    const TestimonialData = [
        {
            img: './images/news1.jpg',
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
          img: './images/story/story-tashi.jpg',
          name: 'Sophie Lavaud',
          profession: 'Swiss / French ',
          testimonial: '“This is now several seasons that I’m climbing peaks above 8000 meters with Seven Summit Treks and I succeed many expeditions with them. '
        },
      
        {
              img: './images/expertise1.jpg',
              name: 'Mike Posner',
              profession: 'American Singer',
              testimonial: '“This is now several seasons that I’m climbing peaks above 8000 meters with Seven Summit Treks and I succeed many expeditions with them.'
        },
        {
            img: './images/gallery/5.png',
            name: 'Mike Posner',
            profession: 'American Singer',
            testimonial: '“This is now several seasons that I’m climbing peaks above 8000 meters with Seven Summit Treks and I succeed many expeditions with them.'
        },
        {
            img: './images/breathless.jpg',
            name: 'Mike Posner',
            profession: 'American Singer',
            testimonial: '“This is now several seasons that I’m climbing peaks above 8000 meters with Seven Summit Treks and I succeed many expeditions with them.'
        },

        {
            img: './images/intro-mountain.jpg',
            name: 'Mike Posner',
            profession: 'American Singer',
            testimonial: '“This is now several seasons that I’m climbing peaks above 8000 meters with Seven Summit Treks and I succeed many expeditions with them.'
        },
      ]

      const [popupState , setPopupState] = useState({open: false})
     
      


      const Popup = ({val, onClick}) => {
       
          return(
                <div className={styles.popup} onClick={() => setPopupState({ open: false })}>
                    

                    <div className={styles.content} >
                    <span className={styles.close}><CloseOutline /> </span>
                       
                            <img src={val.img} alt="" />
                            <h4>{val.name}</h4>
                            <span>{val.profession}</span>
                            <p>{val.testimonial}</p>
                            
               
                    </div>
                </div>
          )
      }

      function showPopup(val) {
      
        return () => setPopupState({ open: true, val });
      }

    
    return (
        <>
            <InnerBanner
                title={'Testimonials'}
                subtitle={'From our Travellers '}
                img={'/images/news1.jpg'}
            />

            <div className={styles.testimonial_wrap}>
                <div className="container-small">
                    <div className={styles.wrap}>
                        {
                            TestimonialData.map((val,index) => {
                                return(
                                    <div className={styles.card} key={index} onClick={showPopup(val)}>
                                        <div className={styles.img}>
                                            <img src={val.img} alt="" />
                                        </div>

                                        <div className={styles.text}>
                                            <h4>{val.name}</h4>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                        {popupState.open === true && (
                            <Popup 
                               val= {popupState.val}
                            />
                        )

                        }


                        


                        
                    </div>
                </div>

                

                <Pagination />
            </div>

        </>

    )
}

export default testimonial
