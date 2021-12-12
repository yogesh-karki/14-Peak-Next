import styles from '../../styles/Tour.module.scss'


import { TimerOutline, BedOutline, AnalyticsOutline,BarChartOutline,MapOutline,CalendarOutline,PeopleOutline} from 'react-ionicons'

const featureData = [
    {
        icon: <TimerOutline />,
        title: 'Duration',
        subtitle: '14 D/N'
    },
    {
        icon: <BedOutline />,
        title: 'Accomodation',
        subtitle: 'Hotel + Lodge'
    },
    {
        icon: <AnalyticsOutline />,
        title: 'Max Accent',
        subtitle: '8848.6'
    },
    {
        icon: <BarChartOutline />,
        title: 'Difficulty',
        subtitle: 'Extreme'
    },{
        icon: <MapOutline />,
        title: 'Walking Per Day',
        subtitle: '5-6 hrs'
    },
    {
        icon: <CalendarOutline />,
        title: 'NEXT AVAILABILITY',
        subtitle: 'March - April'
    },
    {
        icon: <PeopleOutline />,
        title: 'Group Size',
        subtitle: '12-15 people'
    },
    {
        icon: <AnalyticsOutline />,
        title: 'Max Accent',
        subtitle: '8848.6'
    },

]

const tripOptions = [
    {
        title: 'Budget Friendly',
        list: ['11 Nts / 10 Days','Three nights at 3 Star Hotel', 'Nine nights dorms' ]
    },
    {
        title: 'Luxury & Style',
        list: ['14 Nts / 13 Days','Four nights at 5 Star Hotel', 'All private rooms', 'Private Airport Transfers', 'One rest day', 'First day guide' ]
    },
    {
        title: 'With Comfort',
        list: ['13 Nts / 12 Days','Three nights at 4 Star Hotel', 'All private rooms', 'Baggage Transfer', 'Shared Airport Transfer', ]
    }


];

const Overview = () => {
    return (
        <div className={styles.tab_content}>
            <div className="container-small">
                <div className={styles.overview}>
                    <div className={styles.tab_heads}>
                        <h4 className="heading_text">Journey to the Top of the World!
                            <span style={{ background: 'url(/images/mount-after-01.svg)' }}></span>
                        </h4>
                    </div>

                    <div className={styles.overview_text}>
                        <p>
                            Platinum Everest Expedition is a luxury package which gives 
                            people an opportunity to stand on top of the highest summit in 
                            the world for an added price. If you want to experience what
                            it feels like to be on the highest point on the planet 
                        </p>

                        <p>
                            This service facilitates you to experience the feeling of 
                            accomplishment that one gets while succeeding in an adventurous
                            sport, all while providing highest levels of safety and comfort 
                            that can be imagined in such a difficult landscape.
                        </p>
                    </div>


                </div>
            </div>

            <div className="container">
                <div className={styles.features}>
                    <div className="container-small">
                        <div className={styles.feature_wrap}>
                            {
                                featureData.map((val, index) => {
                                    return(
                                        <div className={styles.feature_card} key={index}>
                                            {val.icon}
                                            <div className={styles.card_desc}>
                                                <p>{val.title }</p>
                                                <h6>{val.subtitle} </h6>
                                            </div>
                                        </div>  
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.trip_options}>
                <div className="container">
                    <div className={styles.tab_heads}>
                        <h4 className="heading_text">Trip Options
                            <span style={{ background: 'url(/images/mount-after-01.svg)' }}></span>
                        </h4>
                    </div> 

                    <div className={styles.option_wrap}>
                        {
                            tripOptions.map((val, index) => {
                                return(
                                    <div className={styles.option_card} key={index}>
                                        <h4>{val.title} </h4>

                                        <ul>
                                            {
                                                val.list.map((val, index) => {
                                                    return(
                                                        <li key={index}>{val} </li>
                                                    )
                                                })
                                            
                                            }
                                        </ul>

                                    </div>
                                )
                            })
                        }
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Overview
