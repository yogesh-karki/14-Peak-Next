import { useEffect } from 'react';

import Link from 'next/link'

import styles from '../styles/Header.module.scss'

const Header = () => {

    useEffect(() =>{
        const navLinks = document.querySelectorAll('.main-menu ')
        const subMenu = document.querySelectorAll('.sub-menu') ;
        const header = document.querySelector('header')


        var activeNav = "";

        navLinks.forEach((link, i) => {
        
            link.addEventListener('click', (e) => {
                e.preventDefault();
                addSubMenu(i)       
                link.classList.add('active')
            })

            link.addEventListener('dblclick', (e) => {
                e.preventDefault();
                removeSubMenu(i)       
                
            })
              
        })

  

        const addSubMenu = (i) => {
            removeSubMenu()
            subMenu[i].classList.add(styles.menu_show)
            document.querySelector('.main-container').classList.add('scroll-lock')
            header.classList.add(styles.solid);
        }

        const removeSubMenu = () => {
            header.classList.remove(styles.solid);

            navLinks.forEach((link) => {
                link.classList.remove('active')
            })
            subMenu.forEach((menu) => {
                menu.classList.remove(styles.menu_show)
            })
            document.querySelector('.main-container').classList.remove('scroll-lock')
        }


        
    },[])

    return (
        <>  
            <header  className={ `${styles.header} `}>
                <div className="container">
                    <div className={styles.nav_container}>
                        <div className={styles.logo}>
                            <Link href= "/">
                                <a >
                                    <img src="./images/assets/logo-color.svg" className={styles.logo_img } alt="" />
                                    <img src="./images/assets/logo-text-color.svg" className={styles.logo_text } alt="" />
                                </a>
                            </Link>
                        </div>

                        <nav>
                            <ul>
                                <li className='main-menu'>
                                    <a href="#"  className={styles.main_nav}>                               
                                        <div className={styles.nav_item}>
                                            Who we are

                                            <span className={styles.subtitle}>About Us</span>
                                        </div>
                                    </a>

                                    
                                    
                                </li>

                                <li className='main-menu'>                         
                                    <a className={styles.main_nav}>
                                        <div className={styles.nav_item}>
                                            Expedition

                                            <span className={styles.subtitle}>Services</span>
                                        </div>

                                    </a>                          
                                    
                                </li>

                                <li className='main-menu'>
                                    <a href="/mountaineering" className={styles.main_nav}>                               
                                        <div className={styles.nav_item}>
                                        Breathless

                                            <span className={styles.subtitle}>World Highest Race</span>
                                        </div>
                                    </a>
                                    
                                </li>

                                <li className='main-menu'>
                                    <a href="" className={styles.main_nav}>                               
                                        <div className={styles.nav_item}>
                                            Useful Info

                                            <span className={styles.subtitle}>A Tour Guide</span>
                                        </div>
                                    </a>
                                    
                                </li>

                                <li className='main-menu'>
                                    <a href="" className={styles.main_nav}>                               
                                        <div className={styles.nav_item}>
                                        Tailor-made Trips

                                            <span className={styles.subtitle}>& individually</span>
                                        </div>
                                    </a>
                                    
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <div className={`${styles.menu_overlay} sub-menu`} >
                <div className={styles.wrap}>
                    <div className={styles.img}>
                        <img src="./images/mountain1.jpg" alt="" />
                    </div>

                    <div className={styles.list}>
                        <ul>
                            <li><a href="/mountaineering">About Us</a></li>
                            <li><a href="/tour">Company</a></li>
                            <li><a href="">Our Team</a></li>
                            <li><a href="">Expertise</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`${styles.menu_overlay} sub-menu`} >
                <div className={styles.wrap}>
                    <div className={styles.img}>
                        <img src="./images/mount-everest-sunjpg.jpg" alt="" />
                    </div>

                    <div className={styles.list}>
                        <ul>
                            <li><a href="/mountaineering">Mountaineering</a></li>
                            <li><a href="/tour">Trek</a></li>
                            <li><a href="">Heli Trek</a></li>
                            <li><a href="">Double Summit</a></li>
                            <li><a href="">7 Summit</a></li>
                            <li><a href="">14 Peak Special</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`${styles.menu_overlay} sub-menu`} >
                <div className={styles.wrap}>
                    <h1>Breathless</h1>
                </div>
            </div>

            <div className={`${styles.menu_overlay} sub-menu`} >
                <div className={styles.wrap}>
                    <h1>Useful Info</h1>
                </div>
            </div>

            <div className={`${styles.menu_overlay} sub-menu`} >
                <div className={styles.wrap}>
                    <h1>Tailor Made</h1>
                </div>
            </div>
            
        </>
    )
}

export default Header
