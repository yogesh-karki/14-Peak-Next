import styles from '../../styles/Tour.module.scss'


import { CalendarClearOutline } from 'react-ionicons'



const Departures = () => {

    const departure = [
        {
            start: 'March 1, 2022', 
            end: 'MAY 9, 2022',
            duration: '62 days', 
            group: '25',
            availability: true,
        },
        {
            start: 'March 1, 2022', 
            end: 'MAY 9, 2022',
            duration: '62 days', 
            group: '25',
            availability: false,
        },
        {
            start: 'March 1, 2022', 
            end: 'MAY 9, 2022',
            duration: '62 days', 
            group: '25',
            availability: true,
        }
    ]

    return (
        <div className={styles.tab_content}>
            <div className="container-small">
                <div className={styles.overview}>
                    <div className={styles.tab_heads}>
                        <h4 className="heading_text">Fixed Departures
                            <span style={{ background: 'url(/images/mount-after-01.svg)' }}></span>
                        </h4>
                        

                    </div>
                </div>

            </div>

            <div className="container">
                <div className={styles.depart_table}>
                    <table>
                        <thead>
                            <tr>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Duration</th>
                                <th>Group Size</th>
                                <th>Availability</th>
                                <th>Trip EnquirY</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                departure.map((val, index) => {
                                    return (
                                        <tr key={index} className={val.availability ? "" : "fadeList"  }>
                                            <td><CalendarClearOutline /> {val.start }</td>
                                            <td><CalendarClearOutline /> {val.end }</td>
                                            <td>{val.duration} </td>
                                            <td>{val.group }</td>
                                            <td>{val.availability ? "Open" : "Close"  }</td>
                                            <td><button > Enquire Now</button> </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>


            
        </div>
    )
}

export default Departures
