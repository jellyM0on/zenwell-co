import Spa1 from '../assets/services/services-spa-1.jpg'
import Spiritual1 from '../assets/services/services-spiritual-1.jpg'
import Nutrition1 from '../assets/services/services-nutrition-1.jpg'
import Teambuilding1 from '../assets/services/services-teambuilding-1.jpg'
import Workshop1 from '../assets/services/services-workshop-1.jpg'

import { Link } from 'react-router-dom'

import info from '../assets/services-info.json'

export default function HomeServices(){

    const Card = ({id, title, img, description}) => {
        return(
            <div id='home-service-card' className='flex flex-col justify-center text-[#FFFAE4] h-fit '>
                <h3 className='leading-[0.75em] font-bold z-10'>{title}</h3>
                <img src={img} alt='Sample Image' className='self-center brightness-[65%]' />
                <p className='self-center text-right w-[60%] text-[0.75em] leading-[1em] m-0'>
                    {description}
                </p>
                <Link to={`/services/${id}`} className='self-start ml-[30px] mt-[-40px] 
                    text-[0.75em] p-[0.25em] hover:underline'>
                    Learn more	&gt;</Link>
            </div>
        )
    }

    let services = info.services; 
    let servicesImgs = [Spa1, Spiritual1, Teambuilding1, Workshop1, Nutrition1];

    return(
        <section id='home-services' className='flex min-h-[100vh]'> 
            <div id='' className="left">
				<div id='home-services-label' className="inner stick ">
                    <div className='bg   '>
                        <div className='flex flex-col gap-[2.5em] items-center bg-[rgba(86,91,45,0.45)] p-[1em]'>
                            <h2 className='text-[#FFFAE4] text-[0.5em]'>WHAT WE DO</h2>
                            <p className='text-[#FFFAE4] w-[25em] text-center '>We offer services to empower individuals to lead healthier and happier lives</p>
                        </div>
                     
                    </div>
				</div>
			</div>

            <div className="right">
				<div className="inner bg-[#707a4cfe]">
					{services.map((service, key) => 
                    <Card title={service.title} 
                    description={service.description} 
                    img={servicesImgs[key]} id={service.id} key={key}/>)}
				</div>
			</div>
            
			
        </section>
   
    

      
    )
}