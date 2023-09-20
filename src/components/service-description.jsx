import Pic from '../assets/services/services-spa-1.jpg'
export default function ServiceDescription(){
    return(
        <section className='grid grid-cols-2 h-[100vh] bg-[#f9f6e7]'>
            <div className='bg-fixed flex flex-col justify-center overflow-hidden'> 
                <div className='translate-y-[1em] text-[#2F3520] pl-[2em]'>
                    <h2 className=' text-[0.5em] mb-[0.5em]'>OUR SERVICES</h2>
                    <h1 className='font-bold text-[4em] leading-[0.75em] text-[#565B2D]'>ZenGlow Spa & Wellness Retreats</h1>
                </div>
              
                <div className="bg-[url('/src/assets/services/services-spa-1.jpg')]
                w-[40vw] h-[60vh] bg-cover bg-center"
                >
                </div>

            
               
            </div>
            <div className='mx-[10%] px-[4em] bg-[#707a4cfe] text-[#FFFAE4] flex flex-col justify-center 
            text-center'>
                <h3 className='text-center text-[0.5em] mb-[2em]'>DESCRIPTION</h3>
                <p>Indulge in the epitome of relaxation and self-care with ZenGlow Spa and Wellness Retreats. These retreats offer a holistic approach to well-being, providing clients with an oasis of tranquility where they can recharge their mind, body, and spirit.</p>
            </div>
        </section>
    )
}