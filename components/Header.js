import { useEffect } from 'react';

import Link from 'next/link'

import styles from '../styles/Header.module.scss'
import { ChevronDownOutline } from 'react-ionicons'

const Header = () => {

    // const mainNavData = [
    //     {
    //         title: 'Who we are',
    //         subtitle: 'About Us', 
      
            
    //     },

    //     {
    //         title: 'Expedition',
    //         subtitle: 'Services'
    //     },
    //     {
    //         title: 'Breathless',
    //         subtitle: 'World Highest Race'
    //     },
    //     {
    //         title: 'Inspriring Stories',
    //         subtitle: 'News & Updates'
    //     },
    //     {
    //         title: 'Useful Info',
    //         subtitle: 'A Tour Guide'
    //     },
   
    // ];

    const navData = [
        {
            mainNavaData:{
                title: 'Who we are',
                subtitle: 'About Us', 
            },
            subMenuData: [
                {
                    title: "About",
                    img: "./images/story/story-tashi.jpg"
                },
                {
                    title: "Company",
                    img: './images/story/story-tenzin.jpg.jpg'
                },
                {
                    title: 'Our Team',
                    img: './images/our-team.jpg'
                },
                {
                    title: 'Expertise',
                    img: './images/expertise.jpg'
                },
                {
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
                    title: "Mountaineering",
                    img: "./images/story/story-tashi.jpg"
                },
                {
                    title: "Trek",
                    img: './images/story/story-tenzin.jpg.jpg'
                },
                {
                    title: 'Heli Trek',
                    img: './images/our-team.jpg'
                },
                {
                    title: 'Double Summit',
                    img: './images/expertise.jpg'
                },
                {
                    title: '7 Summit',
                    img: './images/temple.jpg'
                },

                {
                    title: '14 Peak Special',
                    img: './images/temple.jpg'
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
                    title: 'Story Movie'
                },
                {
                    title: 'Be Part'
                },
                {
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
                    title: 'Inspring Stories Stories'
                },
                {
                    title: 'Testimonials'
                },
                {
                    title: 'News & Updates'
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
                    title: 'Terms & Condition'
                },
                {
                    title: 'Gear List'
                },
                {
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
                                    navData.map((val,index)=> {
                                        return(
                                            <li className='main-menu' key={index}>
                                                <a href="#"  className={styles.main_nav}>                               
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
                                                <img src={sub.img} key={index}/>
                                            )
                                        })
                                    }
                                </div>

                                <div className={styles.list}>
                                    <ul>

                                    {
                                        val.subMenuData.map((sub,index) => {
                                            return(
                                                <li key={index}><a href="">{sub.title} </a> </li>
                                            )
                                        })
                                    }
                                        {/* <li><a href="/mountaineering">About Us</a></li>
                                        <li><a href="/tour">Company</a></li>
                                        <li><a href="">Our Team</a></li>
                                        <li><a href="">Expertise</a></li>
                                        <li><a href="">Contact Us </a></li> */}
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
