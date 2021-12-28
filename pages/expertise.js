import Link from 'next/link'

import InnerBanner from '../components/InnerBanner'
import Intro from '../components/Intro'
import styles from '../styles/Team.module.scss'

const expertise = () => {
    const IntroData = {
        title: 'Most Experienced Expedition Leaders in the Himalayas',
        paragraphOne: 'When it comes to scaling the peaks, dangers are plenty. Although the mountains seem serene and gentle from a distance, the weather there this treacherous. The terrain can be downright unforgiving and to have someone accompanying you',
        paragraphTwo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, quasi. Animi deserunt corrupti non enim exercitationem optio debitis aliquam, iste omnis ex sint, dolorem molestiae sequi! Dolorum labore praesentium illum!',
    }
    
    const expertiseData = [
        {
            name: "Tashi Lakpa Sherpa",
            desgination: 'Founder',
            gmail: 'tashi@14peakexpedition.com',
            image: './images/management/Tashi Lakpa Sherpa.jpg',
            text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa illo excepturi aliquid nesciunt debitis libero architecto perspiciatis nobis quam!'
        },
        {
            name: "Dawa Sherpa",
            desgination: 'Founder',
            gmail: 'dawa@14peakexpedition.com',
            image: './images/management/Dawa Sherpa.jpg'
        },
        {
            name: "Mingma Sherpa",
            desgination: 'Founder',
            gmail: 'mingma@14peakexpedition.com',
            image: './images/management/Mingma Sherpa.jpg'
        },
        {
            name: "Pasang Sherpa",
            desgination: 'Founder',
            gmail: 'pasang@14peakexpedition.com',
            image: './images/management/Pasang Sherpa.jpg'
        },

    ]
    

    return (
        <>
            <InnerBanner
                title={'Expertise'}
                subtitle={'14 Peak Expeditions'}
                img={'/images/expertise-banner.jpg'}
            />

            <Intro 
                title={IntroData.title} 
                paragraphOne={IntroData.paragraphOne}
                paragraphTwo={IntroData.paragraphTwo}
      
            />

            <div className={styles.wrapper}>

                <section className={styles.team_wrapper}>
                    <div className="container">

                        <div className={styles.team_row}>
                            <div className="row spacing">
                                {
                                    expertiseData.map((member, index) => {
                                        return(
                                            <div className="col-md-2 col-lg-4 col-xl-3" key={index}>
                                                <Link href="/expertise-detail">
                                                    <div className={`${styles.card} ${styles.expert_card}`}>
                                                        <figure>
                                                            <img src={member.image} />
                                                        </figure>

                                                        <div className={styles.text}>
                                                            <h5> {member.name} </h5>
                                            
                                                        </div>

                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </section>

            </div>
 

        </>

    )
}

export default expertise
