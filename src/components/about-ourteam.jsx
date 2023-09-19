import Logo from '../assets/logo.png'

export default function OurTeam(){
    return(
        <section className='bg-[#f9f6e7]'>
            <div id='about-ourteam-img'></div>
            <div className='h-[50vh] flex flex-col gap-[2.25em] justify-center items-center text-[#565B2D]'>
                <h1 className='text-center text-[#2F3520] text-[0.5em]'>OUR TEAM</h1>
                <p className='text-center px-[20%] text-[#2F3520]'>Our team consists of certified wellness coaches, nutritionists, yoga instructors, and spiritual guides, all with a shared passion for well-being. With their expertise and dedication, we've been able to positively impact the lives of thousands of individuals worldwide.</p>
                <img src={Logo} alt="Zenwell Co. Logo" id='hero-descrip-logo' className='w-[1.5em]' />
            </div>
          
        </section>
    )
}