import { useEffect } from 'react';

import Link from 'next/link'

import styles from '../styles/Header.module.scss'
import { ChevronDownOutline } from 'react-ionicons'

const Header = () => {

    const mainNavData = [
        {
            title: 'Who we are',
            subtitle: 'About Us'
        },

        {
            title: 'Expedition',
            subtitle: 'Services'
        },
        {
            title: 'Breathless',
            subtitle: 'World Highest Race'
        },
        {
            title: 'Inspriring Stories',
            subtitle: 'News & Updates'
        },
        {
            title: 'Useful Info',
            subtitle: 'A Tour Guide'
        },
   
    ]

    useEffect(() =>{
        const navLinks = document.querySelectorAll('.main-menu ')
        const subMenu = document.querySelectorAll('.sub-menu') ;
        const header = document.querySelector('header');
        const menuArrow = document.querySelectorAll('.menu_dropdown')
       


        navLinks.forEach((link, i) => {
        
            link.addEventListener('click', (e) => {
                e.preventDefault();
                if(link.classList.contains('active')) {

                    removeSubMenu()
                    removeDropArrow()
                } else {
                    console.log(link)
                    addSubMenu(i)  
                    link.classList.add('active')
                }
                
            })
              
        })

        const addSubMenu = (i) => {
            removeSubMenu()
            removeDropArrow()
            menuArrow[i].style.display = 'block'
            subMenu[i].classList.add(styles.menu_show)
            document.querySelector('.main-container').classList.add('scroll-lock')
            header.classList.add(styles.solid);
        }

        const removeDropArrow = () => {
            menuArrow.forEach((arrow) => {
                arrow.style.display = 'none'
            })
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
                                {
                                    mainNavData.map((val, index) => {
                                        return (
                                            <li className='main-menu' key={index}>
                                                <a href="#"  className={styles.main_nav}>                               
                                                    <div className={styles.nav_item}>
                                                        {val.title}

                                                        <span className={styles.subtitle}>{val.subtitle} </span>
                                                    </div>
                                                </a>
                                                <span className={`${styles.dropdown} menu_dropdown`}><ChevronDownOutline /> </span>
                                            </li>
                                        )
                                    })
                                }

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
                            <li><a href="">Contact Us </a></li>
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
