import {useRef, useEffect} from 'react'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import InnerBanner from '../components/InnerBanner'
import styles from '../styles/News.module.scss'

import {ButtonDark } from '../components/Button';
import Pagination from '../components/Pagination';



const testimonial = () => {

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
 
    return (
        <>
            <InnerBanner
                title={'Testimonials'}
                subtitle={'From our Travellers '}
                img={'/images/manaslu.jpg'}
            />


        </>

    )
}

export default testimonial
