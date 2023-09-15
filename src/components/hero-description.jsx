export default function HeroDescription(){
    return(
        <section className='grid grid-cols-2 h-[100vh]'>
            <div id='hero-descrip-text' className=' flex flex-col items-center justify-center p-[25%] text-center
            '>
                <p>
                At ZenWell Co., <br></br> 
                we believe that true well-being comes from finding balance in mind, body, and spirit. 
                <br/><br/>
                Our mission is to guide you on a transformative journey toward a healthier and happier life. 
                Explore our innovative products and services designed to nurture your holistic wellness.
                </p>

                {/* <button>Learn More...</button> */}
            </div>

            <div id='hero-descrip-img' className='flex items-center justify-end'>
                <h2 className='text-[8em] text-[#FFFAE4] text-right'>Our <br></br> Mission</h2>
            </div>

    
        </section>
    )
}