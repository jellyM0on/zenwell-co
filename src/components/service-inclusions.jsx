import Pic from '../assets/services/services-spa-1.jpg'

export default function ServiceInclusions(){

    const Card = () => {
        return(
            <div className='flex flex-col items-center px-[2em] text-center 
            gap-[1em] text-[#565B2D]'>
                <div className="bg-[url('/src/assets/services/services-spa-1.jpg')]
                w-full h-[15vw] bg-cover bg-center "></div>
                <h3 className='font-bold'>SPA THERAPY</h3>
                <p>Our expert spa therapists use natural and organic products to pamper clients with rejuvenating massages, facials, and body treatments.</p>
            </div>
        )
    }
    return(
        <section className=' flex flex-col items-center gap-[2em] min-h-[100vh] bg-[#f9f6e7] p-[5em]'>
            <h2 className='text-[#2F3520] text-[0.5em]'>INCLUSIONS</h2>
            <div className='grid grid-cols-2 gap-[4em]'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}