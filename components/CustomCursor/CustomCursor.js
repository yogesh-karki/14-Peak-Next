import React, {useRef, useEffect} from 'react';
import styles from '../../styles/Cursor.module.scss'

const CustomCursor = () => {

    const cursorRef = useRef(null)

    useEffect(() =>{
        var links = document.querySelectorAll('a')
        const cursor =   document.querySelector('.app_cursor')
        links.forEach(link => {
            link.addEventListener('mouseover', () => {
                cursor.classList.add(`${styles.scale}`);
            })

            link.addEventListener('mouseout', () => {
                cursor.classList.remove(`${styles.scale}`);
            })

            link.addEventListener('click', () => {
                cursor.classList.remove(`${styles.scale}`);
            })
        })


        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;

            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`

        })
    },[])

    return ( 
      
        <div className={`${styles.app_cursor} app_cursor`} ref={cursorRef} >
            <div className={styles.dot}></div>
        </div>

       
     );
}
 
export default CustomCursor;