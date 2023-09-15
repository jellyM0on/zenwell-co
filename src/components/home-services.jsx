import Spa from '../assets/services/services-spa-1.jpg'
import Spa2 from '../assets/services/services-spa-2.jpg'


export default function HomeServices({services}){


    const Card = ({title, img, description}) => {
        return(
            <div id='home-service-card' className='flex flex-col justify-center text-[#FFFAE4] h-fit '>
                <h3 className='leading-[0.75em] font-bold'>{title}</h3>
                <img src={img} alt='Sample Image' className='self-center ' />
                <p className='self-center text-right w-[60%] text-[0.75em] leading-[1em] m-0'>
                    {description}
                </p>
                <button className='self-start ml-[60px] mt-[-40px] 
                    text-[0.75em] p-[0.25em] hover:underline'>
                    Learn more	&gt;</button>
            </div>
        )
    }
    return(
        <section id='home-services' className='flex min-h-[100vh]'> 
            <div id='' class="left">
				<div id='home-services-label' className="inner stick ">
                    <div className='bg  flex flex-col gap-[2.5em] '>
                        <h2 className='text-[#FFFAE4] text-[0.5em]'>WHAT WE DO</h2>
                        <p className='text-[#FFFAE4] px-[20%] text-center '>We offer services to empower individuals to lead healthier and happier lives</p>
                    </div>
				</div>
			</div>

            <div class="right">
				<div class="inner bg-[#707a4cfe]">
					<div id='home-service-card' className='flex flex-col justify-center text-[#FFFAE4] h-fit '>
                        <h3 className='leading-[0.75em] font-bold'>ZenGlow Spa Retreat</h3>
                        <img src={Spa} alt='Sample Image' className='self-center ' />
                        <p className='self-center text-right w-[60%] text-[0.75em] leading-[1em] m-0'>
               Experience the ultimate in relaxation and rejuvenation with our ZenGlow Spa and Wellness Retreats. Indulge in a range of luxurious spa treatments, including massages, facials, and aromatherapy, all set against the backdrop of our serene wellness retreat locations.
                        {/* <br></br><br />
                        <span> <button>Learn more...</button> </span> */}
                        </p>
                        <button className='self-start ml-[60px] mt-[-40px] 
                        text-[0.75em] p-[0.25em] hover:underline'>
                            Learn more	&gt;</button>
                 
                      
                    </div>
                    
                    <div id='home-service-card' className='flex flex-col justify-center text-[#FFFAE4]'>
                        <h3 className='leading-[0.75em] font-bold'>ZenGlow Spa Retreat</h3>
                        <img src={Spa2} alt='Sample Image' className='self-center ' />
                        <p className='self-center text-right w-[60%] text-[0.75em] leading-[1em] m-0'>
               Experience the ultimate in relaxation and rejuvenation with our ZenGlow Spa and Wellness Retreats. Indulge in a range of luxurious spa treatments, including massages, facials, and aromatherapy, all set against the backdrop of our serene wellness retreat locations.
                        <br></br><br />
                        <span> <button>Learn more...</button> </span>
                        </p>
                    
                      
                    </div>

				</div>
			</div>
            
			
        </section>
   
    

      
    )
}