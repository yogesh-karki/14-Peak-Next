import Link from 'next/link'

import styles from '../../styles/Tour.module.scss'


import { AttachOutline, ConstructOutline, MapOutline } from 'react-ionicons'



const Service = () => {

    const download = [
        {
            icon: <AttachOutline />,
            title: "Get Trip PDF",
            link: "/"
        },

        {
            icon: <ConstructOutline />,
            title: "Check Gear List",
            link: "/"
        },

        {
            icon: <MapOutline />,
            title: "Download Route Map",
            link: "/"
        },
        {
            icon: <AttachOutline />,
            title: "Get Trip PDF",
            link: "/"
        },

        {
            icon: <ConstructOutline />,
            title: "Check Gear List",
            link: "/"
        }
    ]


    return (
        <div className={styles.tab_content}>
            <div className="container-small">
                <div className={styles.overview}>
                    <div className={styles.tab_heads}>
                        <h4 className="heading_text">Useful Info
                            <span style={{ background: 'url(/images/mount-after-01.svg)' }}></span>
                        </h4>
                        

                    </div>
                </div>


            </div>

            <div className="container">
                <div className={styles.downloads}>
                    {
                        download.map((val,index) => {
                            return (
                                <div className={styles.download_card} key={index}>
                                    <Link href={val.link}>
                                        <a target="_blank" >
                                            {val.icon}
                                            <span>{val.title }</span>
                                        </a>
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            
        </div>
    )
}

export default Service
