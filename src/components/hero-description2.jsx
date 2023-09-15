import Logo from '../assets/logo.png'

export default function HeroDescription2(){
    return(
        <section id='home-mission' className='flex flex-col justify-center items-center h-[60vh] bg-[#f9f6e7] gap-[2.5em]'>
            <h2 className='text-center text-[#2F3520] text-[0.5em]'>OUR MISSION</h2>
            <p className='text-center px-[20%] text-[#2F3520]'>
            <i>At ZenWell Co.,</i> <br></br>
            we believe that true well-being comes from finding balance in mind, body, and spirit.
            Our mission is to guide you on a transformative journey toward a healthier and happier life.
            <br></br><br></br>
            Explore our innovative products and services designed to nurture your holistic wellness.
            </p>
            <img src={Logo} alt="Zenwell Co. Logo" id='hero-descrip-logo' className='w-[1.5em]' />
        </section>
    )
}