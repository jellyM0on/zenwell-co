
export default function OurStory(){
    return(
        <section>
            <div className='flex h-[100vh] text-[#565B2D] pl-[2em] bg-[#f9f6e7]'>
                <div className='flex flex-col justify-center w-[60vw]'>
                    <h2 className='text-[#2F3520] text-[0.5em] p-[1em]'>ABOUT US</h2>
                    <h1 className='font-bold text-[4em] leading-[0.75em] mb-[1em]'>Our Story</h1>
                    <p className='my-[0.5em] w-[75%]'>
                        In the bustling heart of Silicon Eco-Valley, ZenWell Solutions was born over a decade ago. Our story is one of vision, passion, and unwavering dedication to the well-being of individuals and the world we inhabit. It all began when a diverse group of wellness advocates, scientists, and holistic experts united under a shared mission: to redefine well-being as a journey, not a destination.
                        <br></br><br></br>
                        We understood that the path to a balanced, purposeful life required nurturing the body, calming the mind, and fostering emotional resilience. This profound realization led us to craft an array of offerings, each designed to empower individuals to embark on their personal wellness journey.
                    </p>
                </div>
                <div id='about-ourstory-main-img'></div>
            </div>

            <div className='flex h-[100vh] bg-[#707a4cfe] text-[#FFFAE4] pr-[2em]'>
                <div id='about-ourstory-sec-img'></div>
                <div className='flex flex-col justify-center items-end w-[60vw] text-right'>
                    <h3 className='font-bold text-[4em] leading-[0.75em] mb-[1em]'>A balanced,<br></br>purposeful life</h3>
                    <p className='my-[0.5em] w-[75%]'>
                        What sets ZenWell Solutions apart is our commitment to a holistic approach to well-being. We understand that true wellness encompasses not only physical health but also mental and emotional harmony. That's why our offerings span from innovative mindfulness technology to immersive wellness retreats in picturesque natural settings. 
                    </p >
                    <p className='my-[0.5em] w-[75%] font-bold'>
                        Together, let's explore the boundless potential of well-being and discover the joy of living a mindful life.
                    </p >
                </div>
            </div>
        </section>
    )
}