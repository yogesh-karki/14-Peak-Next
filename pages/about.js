import InnerBanner from '../components/InnerBanner'
import Intro from '../components/Intro'


const about = () => {
    const IntroData = {
        title: 'Love and Persistence in climbing mountains',
        paragraphOne: 'When it comes to scaling the peaks, dangers are plenty. Although the mountains seem serene and gentle from a distance, the weather there this treacherous. The terrain can be downright unforgiving and to have someone accompanying you',
        paragraphTwo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, quasi. Animi deserunt corrupti non enim exercitationem optio debitis aliquam, iste omnis ex sint, dolorem molestiae sequi! Dolorum labore praesentium illum!',
        image: './images/mountain1.jpg'
    }
    

    return (
        <>
            <InnerBanner
                title={'About'}
                subtitle={'Introduction to 14 Peak Expeditions'}
                img={'/images/manaslu.jpg'}
            />

            <Intro 
                title={IntroData.title} 
                paragraphOne={IntroData.paragraphOne}
                paragraphTwo={IntroData.paragraphTwo}
                image={IntroData.image}
            />
            

        </>

    )
}

export default about
