import Link from 'next/link'

import Header from './Header'

import {Affilation, TravelPartner} from './FooterLogo'
import styles from '../styles/Layout.module.scss'


export const Layout = ({children}) => {
    return (
        <div className="main-container">
        <Header />        

            <div>
                {children}
            </div>


        <div className={styles.footer_top}>
            <div className="container">
                <div className={styles.ft_wrap}>
                    <TravelPartner />
                    <Affilation />
                </div>
            </div>
        </div>

        <footer className={styles.footer} style = {{ background: 'url(/images/footer-background.png)' }}>
            <div  className={`${styles.footer_background} ${styles.background_far} `} style = {{ background: 'url(/images/clouds-far.png)' }}></div>
            <div className={`${styles.footer_background} ${styles.background_near} `} style = {{ background: 'url(/images/clouds-near.png)' }}></div>

            <div className="container">
                <div className={styles.ft_top}>
                    <nav className={styles.footer_menu}>
                        <a href="">Travel Insurance</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Expertise</a>
                        <a href="">Gallery</a>
                        <a href="">Gear List</a>
                        <a href="">FAQs</a>
                    </nav>

                    <div className={styles.footer_social}>
                        <a href=""><i className="fab fa-facebook-f"></i> </a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                    </div>
                </div>

                <div className={styles.cpy_rights}>
                    <div>
                        <p>© 14 Peak Expedition. All Rights Reserved</p>
                        <p>Website by <a href="" target="_blank" >Hue Shine</a></p>
                    </div>

                    <div className={styles.footer_logo}>
                        <img src="./images/assets/footer-logo.svg" alt="" />
                    </div>
                </div>

                <div className={styles.footer_bottom}>
                    <p>We accept</p>
                    <img src="./images/footer-images/visa.png" alt="" />
                    <img src="./images/footer-images/mastercard.png" alt="" />
                    <img src="./images/footer-images/americanexpress.png" alt="" />
                    <img src="./images/footer-images/jcb.png" alt="" />
                </div>

            </div>
        </footer>

        </div>
    )
}





