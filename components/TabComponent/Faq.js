import { Collapse } from 'antd';

const { Panel } = Collapse;

import styles from '../../styles/Tour.module.scss'


const Faq = () => {


    const faqData = [
        { 
            question: 'How hard is Everest Base Camp Trek via Gokyo Lakes and Cho La Pass?',
            answer: 'Comparatively Everest Base Camp trek via Gokyo Lakes and Cho La Pass is harder than the EBC classical route. One must read and acquire important information, consult and prepare better with a strong mind set to take up the challenge. This trek is more technically advanced than some of the other treks in the Everest region – thus it is more adventurous. With little technical skills and a good physical fitness and acclimatization, you’ll have nothing to worry about on the trek. Sometimes trekkers simply tend to get overwhelmed by hearing from others about the difficulties and various challenges of this trek. Our expert travel consultants will guide you for better counseling and preparation to take up this challenge.'
        },
        {
            question: 'What is the best time to do the Everest Base Camp trek via Gokyo Lakes and Cho La Pass?',
            answer: 'Everest Base Camp trek via Gokyo lakes and Cho La Pass is best done in pre-monsoon season i.e. from March to May and post-monsoon season i.e. from late September to December. It is also possible to do this trek in February and early September but the trek is best preferred during the above months.'
        },
        {
            question: 'Is my trip departure guaranteed?',
            answer: 'Absolutely yes! Under normal circumstances, our booked trips are guaranteed to run. You will still be doing your trek even if other trekkers cancel their trip. This is the reason why Himalayan Glacier is different from other agencies, who usually cancel their whole trip a month or even a week before the trip date. We are a tailor-made company and the number of participants does not stop our operation. If your trip has been canceled by your operator and you are in a last-minute stress, remember to find us to sort out your trip decisions. Please feel free to book your stress-free holidays with us. Unless there is a situation which is out of control such as a political riot, natural disaster, pandemic, epidemic or weather catastrophes, our trips are 100% guaranteed to run.'
        },
        {
            question: 'What if I cancel the trip, do I get my refund?',
            answer: 'Himalayan Glacier offers a lifetime deposit policy which allows you the flexibility to transfer your deposit to anyone or any other trip. If you wish to cancel your booked trips, certain cancelation charges apply. Please visit our booking terms and conditions for detailed information.'
        }
    ]



    return (
        <div className={styles.tab_content}>
            <div className="container-small">
                <div className={styles.overview}>
                    <div className={styles.tab_heads}>
                        <h4 className="heading_text">FAQs
                            <span style={{ background: 'url(/images/mount-after-01.svg)' }}></span>
                        </h4>
                        

                    </div>
                </div>

            </div>

            <div className="container">
            <Collapse accordion className="faq_content">
                {
                    faqData.map((val, index) => {
                        return(
                            <Panel header={val.question} key={index} className={styles.tour_faq}>
                                <p className={styles.faq_content}>{val.answer }</p>
                            </Panel>
                        )
                    })
                }

            </Collapse>
            </div>

            
        </div>
    )
}

export default Faq
