import InnerBanner from '../components/InnerBanner'
import Intro from '../components/Intro'

import styles from '../styles/Team.module.scss'


const about = () => {
    const IntroData = {
        title: 'Love and Persistence in climbing mountains',
        paragraphOne: 'When it comes to scaling the peaks, dangers are plenty. Although the mountains seem serene and gentle from a distance, the weather there this treacherous. The terrain can be downright unforgiving and to have someone accompanying you',
        paragraphTwo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, quasi. Animi deserunt corrupti non enim exercitationem optio debitis aliquam, iste omnis ex sint, dolorem molestiae sequi! Dolorum labore praesentium illum!',
        image: './images/mountain1.jpg'
    }
    
    const teamData = [
        {
            id: 'Board of Directors',
            members: [
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
        },
        {
            id: 'INTERNATIONAL COORDINATORS',
            members: [
                {
                    name: "Taras Pozdnii",
                    desgination: 'International Co-ordinator (UKRAIN / RUSSIA) ',
                    gmail: 'tashi@14peakexpedition.com',
                    image: './images/management/tarsa.jpg'
                },
                {
                    name: "Arnold Coster ",
                    desgination: 'International Co-Ordinator (EU) ',
                    gmail: 'dawa@14peakexpedition.com',
                    image: './images/management/arnold-coster.jpg'
                }
            ]
        },{
            id: 'Field Staffs',
            members: [
                {
                    name: "Migma Thainduk",
                    desgination: 'Climbing Guide',
                    gmail: 'tashi@14peakexpedition.com',
                    image: './images/management/team1.jpg'
                },
                {
                    name: "Karma Gyalje Sherpa",
                    desgination: 'Climer',
                    gmail: 'dawa@14peakexpedition.com',
                    image: './images/management/team2.jpg'
                },
                {
                    name: "Halung Dorje Sherpa",
                    desgination: 'Climbing Guide',
                    gmail: 'mingma@14peakexpedition.com',
                    image: './images/management/team3.jpg'
                },
                {
                    name: "Pemba Thinduk Sherpa",  
                    desgination: 'Climber',
                    gmail: 'pasang@14peakexpedition.com',
                    image: './images/management/team4.jpg'
                },
                {
                    name: "Halung Dorje Sherpa",
                    desgination: 'Climbing Guide',
                    gmail: 'mingma@14peakexpedition.com',
                    image: './images/management/team3.jpg'
                },
                {
                    name: "Pemba Thinduk Sherpa",  
                    desgination: 'Climber',
                    gmail: 'pasang@14peakexpedition.com',
                    image: './images/management/team4.jpg'
                },
            ]
        },
    ]


    return (
        <>
            <InnerBanner
                title={'About'}
                subtitle={'Magement Team'}
                img={'/images/team2.jpg'}
            />

            <div className={styles.wrapper}>

                {
                    teamData.map((val, index) => {
                        return(
                            <section className={styles.team_wrapper} key={index} >
                                <div className="container">
                                    <h4 className="heading_text">{val.id} </h4>

                                    <div className={styles.team_row}>
                                        <div className="row spacing">
                                            {
                                                val.members.map((member, index) => {
                                                    return(
                                                        <div className="col-md-2 col-lg-4 col-xl-3" key={index}>
                                                            <div className={styles.card}>
                                                                <figure>
                                                                    <img src={member.image} />
                                                                </figure>

                                                                <div className={styles.text}>
                                                                    <h5> {member.name} </h5>
                                                                    <label> {member.desgination} </label>
                                                                    <span>{member.gmail}</span>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                </div>
                            </section>
                        )
                    })
                }
            </div>

    

        </>

    )
}

export default about
