function Package({title, cost, duration, location}){
    return(
        <div>
            <h3 className='italic mb-2 font-bold'>"{title}"</h3>
             <p>{cost} <br/>
                for<br/>
                {duration}<br/>
                at<br/>
                {location}</p>
        </div>
    )
}


export default function ServicePackages({info, accomodation}){
   console.log(accomodation); 
    return(
        <section className='grid grid-cols-2 h-[100vh] bg-[#f9f6e7]'>
            <div className='mx-[10%] px-[4em] bg-[#707a4cfe] text-[#FFFAE4] flex flex-col justify-center 
            text-center items-center gap-[2em]'>
                <h2 className=' text-[0.5em]'>PACKAGES</h2>
               {info.map((pkg, key) => 
               <Package title={pkg.title} cost={pkg.cost} duration={pkg.duration}
               location={pkg.location} key={key}/>)}
             
                <button className=' p-[0.5em] rounded-lg w-fit text-[#565B2D] bg-[#f9f6e7] border-2 border-[#565B2D]
                hover:bg-[#565B2D]  hover:text-[#f9f6e7]'>Book a consultation &gt;</button>
            </div>

            <div className='bg-fixed flex flex-col justify-center items-end overflow-hidden'>
            <div style={{backgroundImage: `url(${accomodation[0].imgs[0]})`}}
                className="w-[40vw] h-[80vh] bg-cover bg-center"
            ></div>
            </div>
        </section>
    )
}