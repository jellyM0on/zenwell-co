import { Link } from "react-router-dom";
export default function HomeDescription(){
    return(
        <section className='flex bg-[#f9f6e7] h-[100vh] pl-[2em]'>
            <div className='flex flex-col justify-center text-[#565B2D]'>
                <p className='text-[0.5em] mb-[1.5em]'>OUR VISION</p>
                <h2 className='font-bold text-[4em] leading-[0.75em] mb-[1em]'>New experiences,<br></br>New perspectives</h2>
                <h3 className='font-semibold my-[0.5em]'>Transformation. Wellness. Harmony.</h3>
                <p className='my-[0.5em] w-[75%]'>Unlock a world of new experiences and transformation with ZenWell. Our holistic approach to well-being offers a fresh perspective on life's journey, allowing you to discover inner harmony, vitality, and fulfillment. From immersive wellness retreats that connect you with nature's serenity to innovative mindfulness technology that guides you towards deeper self-awareness, every experience with ZenWell is an opportunity to embrace a more balanced, purposeful life.</p>
                
                <Link to='/about'><button className='my-[1.5em] p-[0.5em] bg-[#565B2D] rounded-lg w-fit text-white border-2 border-[#565B2D]
                hover:bg-white hover:text-[#565B2D]
                '> Learn more about us &gt;</button></Link>
                
        
            </div>

            <div id='home-description-main-bg' className='box-border '></div>
          

        </section>
    )
}