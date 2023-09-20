export default function ServicePackages(){
    return(
        <section className='grid grid-cols-2 h-[100vh] bg-[#f9f6e7]'>
            <div className='mx-[10%] px-[4em] bg-[#707a4cfe] text-[#FFFAE4] flex flex-col justify-center 
            text-center items-center gap-[2em]'>
                <h2 className=' text-[0.5em]'>PACKAGES</h2>
                <p>$1,499/head <br/>
                for<br/>
                4 days, 3 nights<br/>
                at<br/>
                Zenvalley, California</p>
                <button className=' p-[0.5em] rounded-lg w-fit text-[#565B2D] bg-[#f9f6e7] border-2 border-[#565B2D]
                hover:bg-[#565B2D]  hover:text-[#f9f6e7]'>Book a consultation &gt;</button>
            </div>

            <div className='bg-fixed flex flex-col justify-center items-end overflow-hidden'>
            <div className="bg-[url('/src/assets/services/services-spa-1.jpg')]
                w-[40vw] h-[80vh] bg-cover bg-center"
            ></div>
            </div>
        </section>
    )
}