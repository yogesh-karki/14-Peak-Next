import {useRef, useEffect} from 'react'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import styles from '../styles/News.module.scss'




const newsDetail = () => {

    const data = [
        {
            title : 'Three siblings are on union Glacier camp',
            img: './images/news1.jpg',
            photoCaption: 'This is the photo caption displaying below photo',
            date : "2021-12-23",
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, vero architecto facere labore distinctio cumque minus dicta quam debitis saepe dolores consectetur odio officiis nihil? Dolores consequuntur similique quibusdam perspiciatis fugiat, sunt porro quia debitis nulla necessitatibus unde quos omnis ipsa dolorum blanditiis tenetur inventore reprehenderit. Illum accusantium facilis tempore odit, incidunt deleniti placeat soluta, reiciendis quaerat, laboriosam unde praesentium beatae eius animi tempora sapiente! Molestiae provident, quia architecto, tempore aliquid voluptates modi facilis velit vitae, delectus aspernatur quis unde asperiores. Recusandae commodi voluptates asperiores nisi facere aut, in nesciunt possimus quo minima quam numquam at vero atque ratione. Totam ab, quidem earum error repellat sit placeat provident ea dolor ullam consequuntur tempora. Porro ducimus, mollitia ad veniam quae, temporibus commodi accusamus itaque nihil magnam sed deleniti sapiente esse perferendis perspiciatis voluptatibus vitae exercitationem cumque dignissimos! Aperiam minima sunt quasi dolorum ea, eius voluptate nostrum in debitis atque cum necessitatibus, pariatur accusantium molestias incidunt reprehenderit animi labore accusamus est blanditiis officiis inventore cumque iusto quos. Voluptates corporis laudantium maiores obcaecati impedit quae quidem tempora vel nisi hic necessitatibus, laboriosam fugiat inventore repudiandae asperiores quibusdam veritatis voluptate vero. Sint quam beatae aliquam delectus iste possimus architecto fugiat vero rem odit id quis magnam eveniet, quo magni accusamus earum fugit. Ea totam voluptates fugiat cum, reprehenderit sed laborum corporis porro doloremque expedita enim voluptas? Molestias adipisci assumenda nemo ducimus maiores nisi repudiandae quia fugit sint quam sed mollitia, dolorum corrupti nostrum, minus dicta id nesciunt. Natus, at minus saepe porro quam, eaque officiis voluptatum omnis facilis id quas dolore tempora odio asperiores aliquam quae similique quisquam amet aperiam. Eius provident hic labore ducimus rem, dolor error facere voluptatibus accusamus sunt nostrum minus quam eum magni architecto fugit laudantium, temporibus nulla suscipit illo animi totam tempora explicabo ea. Sapiente, perspiciatis? Optio, voluptas voluptatem!  '
        }
    ]

    return (
        <>
           <section className={styles.head_detail}>
                <h2>{data[0].title}</h2>
                <span>{data[0].date} </span>
                <div className={styles.img}>
                    <img src={data[0].img} alt="" />
                    <span>{data[0].photoCaption }</span>
                </div>
           </section> 
                

            <section className={styles.news_detail}>
                <div className={styles.text}>
                    <p>{data[0].description} </p>
                </div>
            </section>
        
        

        </>

    )
}

export default newsDetail
