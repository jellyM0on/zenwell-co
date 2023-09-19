import Logo from '../assets/logo.png'

import MissionImage1 from '../assets/home/hero-mission.jpg'
import MissionImage2 from '../assets/home/home-mission-2.jpg'
import MissionImage3 from '../assets/home/home-mission-3.jpg'
import MissionImage4 from '../assets/home/home-mission-5.jpg'

export default function HeroDescription2(){
    return(
        <section id='home-mission' className=''>
            <div className='flex flex-col justify-center items-center h-[60vh] bg-[#f9f6e7] gap-[2.5em]'>
                <h2 className='text-center text-[#2F3520] text-[0.5em]'>OUR MISSION</h2>
                <p className='text-center px-[20%] text-[#2F3520]'>
                <i>At ZenWell Co.,</i> <br></br>
                we believe that true well-being comes from finding balance in mind, body, and spirit.
                Our mission is to guide you on a transformative journey toward a healthier and happier life.
                <br></br><br></br>
                Explore our innovative products and services designed to nurture your holistic wellness.
                </p>
                <img src={Logo} alt="Zenwell Co. Logo" id='hero-descrip-logo' className='w-[1.5em]' />
            </div>
            <div className='grid grid-cols-4  '>
                <img src={MissionImage1} alt="" className='h-[100%] brightness-[90%] sepia-[20%]' />
                <img src={MissionImage2} alt="" className='h-[100%] sepia-[20%]'/>
                <img src={MissionImage3} alt="" className='h-[100%] brightness-[120%] saturation-[40%] sepia-[10%]'/>
                <img src={MissionImage4} alt="" className='h-[100%] brightness-[120%] '/>
            </div>
           
        </section>
    )
}