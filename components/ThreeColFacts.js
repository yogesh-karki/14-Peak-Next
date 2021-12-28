import React from 'react'
import styles from '../styles/Layout.module.scss'


const ThreeColFacts = (props) => {
    const data = props.factData;

    return (
        <div className={styles.facts}>
            <div className="container">
                <div className={styles.wrap}>
                {
                    data.map((val,index)=> {
                        return(
                            <div className={styles.fact} key={index}>
                                <h4>{val.title}</h4>
                                <h2>{val.number}</h2>
                                <p>{val.text}</p>
                            </div>
                        )
                    })
                }
                </div>
            
            </div>
        </div>
    )
}

export default ThreeColFacts
