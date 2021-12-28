

import InnerBanner from '../components/InnerBanner'
import styles from '../styles/Team.module.scss'
import ReactCountryFlag from "react-country-flag"


const expertise = () => {

    return (
        <>
            <InnerBanner
                img={'/images/expert-bg.jpg'}
            />

            <div className={styles.intro_experts}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className={styles.text}>
                                <div className={styles.head}>
                                    <h3>Tashi Lakpa Sherpa</h3>
                                    <p>Founder 14 Peaks Expeditions</p>
                                    <p>Managing Director of Seven Summit Treks</p>
                                    <p>Adventure specialist</p>
                                </div>
                                
                                <blockquote>
                                    Known for his sense of responsibility and honesty, he was born and brought up on laps of Mountains.
                                    He is currently in the mission of climbing all seven highest peaks of Seven Continent known as Seven Summits
                                </blockquote>


                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className={styles.img}>
                                <img src="./images/management/Tashi Lakpa Sherpa.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.timeline}>
                <div className="container-small">
                    <h5>Expeditions Timeline</h5>

                    <table>
                        <thead>
                            <tr>
                                <th>S.N</th>
                                <th>Mountain</th>
                                <th>Elevation</th>
                                <th>Country</th>
                                <th>Summited in</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mount Everest</td>
                                <td>8848m</td>
                                <td><ReactCountryFlag countryCode="NP" svg  /></td>
                                <td> 2004</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Mount Makalu</td>
                                <td>8463 m</td>
                                <td><ReactCountryFlag countryCode="NP" svg  /></td>
                                <td>2008</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Mount K2</td>
                                <td>8611 m</td>
                                <td><ReactCountryFlag countryCode="PK" svg  /></td>
                                <td>2017</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Mount Lhotse</td>
                                <td>8188</td>
                                <td><ReactCountryFlag countryCode="NP" svg  /></td>
                                <td>2007</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Mount Makalu</td>
                                <td>8463 m</td>
                                <td><ReactCountryFlag countryCode="NP" svg  /></td>
                                <td>2008</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Mount K2</td>
                                <td>8611 m</td>
                                <td><ReactCountryFlag countryCode="PK" svg  /></td>
                                <td>2017</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Mount Lhotse</td>
                                <td>8188</td>
                                <td><ReactCountryFlag countryCode="NP" svg  /></td>
                                <td>2007</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Mount Makalu</td>
                                <td>8463 m</td>
                                <td><ReactCountryFlag countryCode="NP" svg  /></td>
                                <td>2008</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Mount K2</td>
                                <td>8611 m</td>
                                <td><ReactCountryFlag countryCode="PK" svg  /></td>
                                <td>2017</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Mount Lhotse</td>
                                <td>8188</td>
                                <td><ReactCountryFlag countryCode="CN" svg  /></td>
                                <td>2007</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                
            </div>

          

        </>

    )
}

export default expertise
