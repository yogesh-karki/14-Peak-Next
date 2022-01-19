import { useEffect } from 'react';

import Link from 'next/link'
import { useRouter } from "next/router";

import styles from '../styles/Header.module.scss'
import { ChevronDownOutline } from 'react-ionicons'

const Header = () => {

    const router = useRouter();

    const navData = [
        {
            mainNavaData:{
                title: 'Who we are',
                subtitle: 'About Us', 
            },
            subMenuData: [
                {
                    id:'about',
                    path:'/about',
                    title: "About",
                    img: "./images/story/story-tashi.jpg"
                },
                {
                    id: 'our_team',
                    path: '/our_team',
                    title: 'Our Team',
                    img: './images/our-team.jpg'
                },
                {
                    id: 'expertise',
                    path: '/expertise',
                    title: 'Expertise',
                    img: './images/expertise.jpg'
                },
                {
                    id: 'contact_us',
                    path: '/',
                    title: 'Contact Us',
                    img: './images/temple.jpg'
                }
            ]
        },

        {
            mainNavaData:{
                title: 'Expedition',
                subtitle: 'Services', 
            }, 
            subMenuData: [
                {
                    path:'/mountaineering',
                    id:'mountaineering',
                    title: "Mountaineering",
                    img: "./images/mountain.jpg"
                },  
                {
                    id:'trekking',
                    path: '/',
                    title: "Trekking",
                    img: './images/trek.jpg'
                },
                {
                    id:'heli_trek',
                    path: '/',
                    title: 'Heli Trek',
                    img: './images/heli.jpg'
                },
                {
                    id: 'double_summit',
                    path: '/',
                    title: 'Double Summit',
                    img: './images/double-summit.jpg'
                },
                {   
                    id: '7_summit',
                    path: '/',
                    title: '7 Summit',
                    img: './images/seven-sumit.jpg'
                },

                {
                    id: '14_peak_special',
                    path: '/',
                    title: '14 Peak Special',
                    img: './images/14-peak-special.jpg'
                }
            ]
        },

        {
            mainNavaData:{
                title: 'Breathless',
                subtitle: 'World Highest Race', 
            }, 

            subMenuData: [
                {
                    id:'story_movie',
                    path: '/',
                    title: 'Story Movie',
                    img:'./images/breathless.jpg',
                },
                {   id:'be_part',
                    path: '/',
                    title: 'Be Part',
                    img:'./images/breathless.jpg',
                },
                {
                    path: '/',
                    title: 'The World Highest Race'
                }
            ]
        },

        {
            mainNavaData:{
                title: 'Inspriring Stories',
                subtitle: 'News & Updates', 
            }, 
            subMenuData: [
                {
                    id: 'inspiring-stories',
                    path: '/videos',
                    title: 'Inspring Stories',
                    img:'./images/news2.jpg',
                },
                {
                    id: 'testimonials',
                    path: '/testimonial',
                    title: 'Testimonials',
                    img:'./images/latest1.jpg',
                },
                {
                    id: '/news',
                    path: '/news',
                    title: 'News & Updates',
                    img:'./images/news1.jpg',
                }
            ]
        },

        {
            mainNavaData:{
                title: 'Useful Info',
                subtitle: 'A Tour Guide', 
            }, 
            subMenuData: [
                {
                    path: '/',
                    title: 'Terms & Condition'
                },
                {
                    path: '/',
                    title: 'Gear List'
                },
                {
                    path: '/',
                    title: 'Travel Insurance'
                }
            ]
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

            let activeImg = subMenu[i].querySelector('.menu-desktop-img img')
            activeImg.classList.add(styles.img_show)
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

        let subMenuList = document.querySelectorAll('.menu-desktop-list li')
        let subMenuImg = document.querySelectorAll('.menu-desktop-img img')

 
        subMenuList.forEach((menu) => {

            menu.addEventListener('click', () => {
                removeSubMenu()
                removeDropArrow()
            })

            menu.addEventListener('mouseover', () => {
                subMenuImg.forEach((img) => {
                    img.classList.remove(styles.img_show)
                    let imgId = img.id;
                    if(menu.id === imgId) {
                        img.classList.add(styles.img_show)
                    }
                })
            })
        })
        
    },[])


    return (
        <>  
            <header className={router.pathname == "/newsDetail" ? `${styles.header} ${styles.solid} ` : `${styles.header} `} >
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
                                    navData.map((val,index)=> {
                                        return(
                                            <li className='main-menu' key={index}>
                                                <a className={styles.main_nav}>                               
                                                    <div className={styles.nav_item}>
                                                        {val.mainNavaData.title}

                                                        <span className={styles.subtitle}>{val.mainNavaData.subtitle} </span>
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

            
            {
                navData.map((val,index) => {
                    return(
                        <div className={`${styles.menu_overlay} sub-menu`} key={index} >
                            <div className={styles.wrap}>
                                <div className={`${styles.img} menu-desktop-img`}>
                                    {
                                        val.subMenuData.map((sub,index) => {
                                            return(
                                                <img src={sub.img} key={index} id={sub.id} />
                                            )
                                        })
                                    }
                                </div>

                                <div className={`${styles.list} menu-desktop-list`}>
                                    <ul>

                                    {
                                        val.subMenuData.map((sub,index) => {
                                            return(
                                                <li key={index} id={sub.id}> 
                                                    <Link href = {sub.path}>
                                                        {sub.title}
                                                    </Link>  
                                                </li>
                                            )
                                        })
                                    }
                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            
        </>
    )
}

export default Header
