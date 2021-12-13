import styles from '../styles/Layout.module.scss'
import {ButtonDark,ButtonWhite } from '../components/Button';


import { TimerOutline, BarChartOutline} from 'react-ionicons'

const PackageCard = (props) => {
    return (
        <div className={styles.package_card}>
            <figure>
                <img src={props.image} alt="" />
            </figure>

            <div className={styles.text}>
                <div className={styles.text_header}>
                    <p><span>{props.category} </span> <span>{props.subCategory }</span>  </p>
                    <h4>{ props.title }</h4>
                </div>

                <div className={styles.package_body}>
                    <div className={styles.facts}>
                        <div className={styles.fact_wrap}>
                            <TimerOutline /> 

                            <div className={styles.fact_text}>
                                <span>Duration</span>
                                <p>62 Days</p>
                            </div>
                        </div>
                        {/* <div className={styles.fact_wrap}>
                            <BarChartOutline />
                            
                            <div className={styles.fact_text}>
                                <span>Difficulty</span>
                                <p>Extreme</p>
                            </div>
                        </div> */}
                    </div>

                    <div className={styles.btn}>
                        <ButtonDark link='/tour' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageCard
