import React from 'react'
import styles from '../styles/Pagination.module.scss'

import { ChevronBackOutline, ChevronForwardOutline} from 'react-ionicons'

const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <ul>
                <li className={styles.disable}><ChevronBackOutline />  </li>
                <li className={styles.active}>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li><ChevronForwardOutline /> </li>
            </ul>
        </div>
    )
}

export default Pagination
