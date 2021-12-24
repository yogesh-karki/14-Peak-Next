import styles from '../styles/Layout.module.scss'

const VideoPlay = () => {
    return (
        <section className={styles.video_section}>
                <div className={styles.thumbnail}>
                    <video className={styles.featured_video} poster="" autoPlay="autoPlay" playsInline="playsInline" muted loop="loop">
                        <source src="./images/videos/short.mp4" type="video/mp4" />
                    </video>

                    {/* <div className={styles.play}>
                        <a href="#"> 
                            <img src="./images/assets/play.svg" alt="" />
                        </a>
                    </div> */}
                </div>
         
        </section>
    )
}

export default VideoPlay
