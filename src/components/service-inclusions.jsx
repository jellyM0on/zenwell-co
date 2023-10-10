import Pic from '../assets/services/services-spa-1.jpg'

export default function ServiceInclusions({info}){

    const Card = ({title, description, img}) => {
        return(
            <div className='flex flex-col items-center px-[2em] text-center 
            gap-[1em] text-[#565B2D]'>
                <div 
                style={{backgroundImage: `url(${img})`}}
                className="w-[25vw] h-[40vh] bg-cover bg-center "></div>
                <h3 className='font-bold'>{title}</h3>
                <p>{description}</p>
            </div>
        )
    }
    return(
        <section className=' flex flex-col items-center gap-[2em] min-h-[100vh] bg-[#f9f6e7] p-[5em]'>
            <h2 className='text-[#2F3520] text-[0.5em]'>INCLUSIONS</h2>
            <div className='grid grid-cols-2 gap-[4em]'>
                {info.map((inclusion, key) => 
                <Card title={inclusion.title} 
                description={inclusion.description}
                img={inclusion.imgs[0]}/> )}
            </div>
        </section>
    )
}