import styles from '../styles/Layout.module.scss'

const Affilation = () => {
    return ( 
        <div className={ `${styles.ft_card} `  }>
            <h4>Affiliations</h4>

            <div className={styles.accept_img}>
                <img src="./images/footer-images/1.png" alt="" />
                <img src="./images/footer-images/2.png" alt="" />
                <img src="./images/footer-images/3.png" alt="" />
                <img src="./images/footer-images/4.png" alt="" />
                <img src="./images/footer-images/5.png" alt="" />
            </div>
        </div>
     );
}

const TravelPartner = () => {
    return ( 
        <div className={ `${styles.ft_card} ${styles.big_img}`  }>
            <h4>We are listed on</h4>

            <div className={styles.accept_img}>
                <img src="./images/footer-images/lonleyplanet.png" alt="" />
                <img src="./images/footer-images/letsgo.png" alt="" />
                <img src="./images/footer-images/tripad.png" alt="" />
            </div>
        </div>
     );
}

export { Affilation, TravelPartner};
 
