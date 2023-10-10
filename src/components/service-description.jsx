import Pic from '../assets/services/services-spa-1.jpg'
export default function ServiceDescription({info}){
    console.log(info.imgs[0])
    return(
        <section className='grid grid-cols-2 h-[100vh] bg-[#f9f6e7]'>
            <div className='bg-fixed flex flex-col justify-center overflow-hidden mt-[2em]'> 
                <div className='translate-y-[1em] text-[#2F3520] pl-[2em]'>
                    <h2 className=' text-[0.5em] mb-[0.5em]'>OUR SERVICES</h2>
                    <h1 className='font-bold text-[4em] text-stroke
                    leading-[0.75em] text-[#565B2D]'>{info.title}</h1>
                </div>
              
                <div 
                style={{backgroundImage: `url(${info.imgs[0]})`}}
                className={`w-[40vw] h-[60vh] bg-cover bg-center`}
                >
                </div>

            
               
            </div>
            <div className='mx-[10%] px-[4em] bg-[#707a4cfe] text-[#FFFAE4] flex flex-col justify-center 
            text-center'>
                <h3 className='text-center text-[0.5em] mb-[2em]'>DESCRIPTION</h3>
                <p>{info.fulldescription}</p>
            </div>
        </section>
    )
}