import styles from '../../styles/Tour.module.scss'


import { CheckmarkCircleOutline ,CloseCircleOutline} from 'react-ionicons'



const Service = () => {
    const includes = [
        {
            title: " Arrival and Departure",
            text: "Kathmandu Airport - Hotel transfers – Kathmandu Airport (Pick Up and Drop)"
        },
        {
            title: "Hotel Accommodation",
            text: " In Kathmandu: 6 nights hotel (3 Star Category) in Kathmandu on BB Plan-Twin Bed Room (sharing basis)"
        },
        {
            title: "Welcome Dinner",
            text: "One Welcome Dinner in tourist standard restaurant in Kathmandu with Office’s Staffs"
        },{
            title: "Cargo Clearance",
            text: "International Air cargo clearance of Member's Personal Luggage & Payment of Government taxes in Nepal. (*before expedition)"
        },{
            title: "Permit",
            text: "Expedition Royalty and permit of Chinese Government (CMA / TMA) to climb Mt. Everest via NE Ridge"
        },{
            title: "Liaison Officer",
            text: "1 Government Liaison officer in Tibet with full equipment, salary and accommodation"
        },{
            title: "Garbage Management",
            text: "Garbage Deposit fees"
        },{
            title: "Rubbish Collection Fee",
            text: "$1500 USD Per Climber standard rubbish collection fee"
        },{
            title: "Insurance",
            text: "Medical & Emergency rescue Insurance for all involved Nepalese staffs during the trek and expedition."
        }

    ]

    const excludes = [
        {
            title: " Arrival and Departure",
            text: "Kathmandu Airport - Hotel transfers – Kathmandu Airport (Pick Up and Drop)"
        },
        {
            title: "Hotel Accommodation",
            text: " In Kathmandu: 6 nights hotel (3 Star Category) in Kathmandu on BB Plan-Twin Bed Room (sharing basis)"
        },
        {
            title: "Welcome Dinner",
            text: "One Welcome Dinner in tourist standard restaurant in Kathmandu with Office’s Staffs"
        },{
            title: "Cargo Clearance",
            text: "International Air cargo clearance of Member's Personal Luggage & Payment of Government taxes in Nepal. (*before expedition)"
        },{
            title: "Permit",
            text: "Expedition Royalty and permit of Chinese Government (CMA / TMA) to climb Mt. Everest via NE Ridge"
        },{
            title: "Liaison Officer",
            text: "1 Government Liaison officer in Tibet with full equipment, salary and accommodation"
        },{
            title: "Garbage Management",
            text: "Garbage Deposit fees"
        },{
            title: "Rubbish Collection Fee",
            text: "$1500 USD Per Climber standard rubbish collection fee"
        },{
            title: "Insurance",
            text: "Medical & Emergency rescue Insurance for all involved Nepalese staffs during the trek and expedition."
        }

    ]

    return (
        <div className={styles.tab_content}>
            <div className="container-small">
                <div className={styles.overview}>
                    <div className={styles.tab_heads}>
                        <h4 className="heading_text">Services
                            <span style={{ background: 'url(/images/mount-after-01.svg)' }}></span>
                        </h4>
                        
                        <p>Services Included / Excluded in this package</p>

                    </div>
                </div>


                <div className={styles.service_lists}>
                    <ul>
                        {
                            includes.map((val,index) => {
                                return(
                                    <li key={index}>
                                        <div className={styles.icon}>
                                            <CheckmarkCircleOutline />
                                        </div>
                                        <label>{val.title}</label>
                                        <p>{val.text }</p>
                                    </li>
                                )
                            })

                            
                        }

                        {
                            excludes.map((val,index) => {
                                return(
                                    <li key={index} className={styles.exclude}>
                                        <div className={styles.icon}>
                                            <CloseCircleOutline />
                                        </div>
                                        <label>{val.title}</label>
                                        <p>{val.text }</p>
                                    </li>
                                )
                            })

                            
                        }

                        
                    </ul>
                </div>
            </div>

            
        </div>
    )
}

export default Service
