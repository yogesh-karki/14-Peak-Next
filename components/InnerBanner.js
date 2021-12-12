import React, {useRef, useEffect} from 'react';
import styles from '../styles/Layout.module.scss'




const InnerBanner = () => {
    const backgroundImage= useRef();
    

    useEffect(() =>{
        var followX = 0,
            followY = 0,
            x = 0,
            y = 0,
            friction = 1/ 30;

        function moveBackground() {
            x +=(followX - x ) * friction ;
            y +=(followY - y ) * friction ;

            backgroundImage.current.style.transform = `translate(${x}px, ${y}px) scale(1.2)`
        }    

        
        document.querySelector('#innerBanner').addEventListener('mousemove', (e) => {

            var lMouseX = 0.2 - x / 2 - e.clientX ;
            var lMouseY = 0.3 - y / 2 - e.clientY ;

            followX = (20 * lMouseX) / 300;
            followY = (10 * lMouseY) / 200;
            
            moveBackground();

        },[])


    
    })

    return ( 
        <section className={styles.inner_banner} id="innerBanner" >
            <div className={styles.ib_bg} ref={backgroundImage} style={{ background: 'url(/images/inner-banner1.jpg)' }}></div>
            <div className={styles.text}>
                <p>A purely artistic journey to the mother nature</p>
                <h2>Everest Base Camp Via Kalapather</h2>
            </div>
        </section>
     );
}
 
export default InnerBanner;