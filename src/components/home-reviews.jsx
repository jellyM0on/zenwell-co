// import HomeReviews1 from '../assets/home/home-reviews-1.jpg'
// import HomeReviews2 from '../assets/home/home-reviews-2.jpg'
// import HomeReviews3 from '../assets/home/home-reviews-3.jpg'

export default function HomeReviews(){

    const Image = ({val}) => {
        return(
            <div className='home-reviews-imgs' id={`home-reviews-img-${val}`}>
            </div>
        )
    }

    // <img src={img} alt="Review Image" className='h-[100%]' />
    const Review = () => {
        return(
            // <div>
            //     <p>{review}</p>
            //     <div>
            //         <img src={img} alt="" />
            //         <p>{name}</p>
            //     </div>
            // </div>

            // border-solid border-2 border-[#565B2D]
            <div className='review-card w-[40vw] h-[35vh] bg-white text-[#555d38fe]
            p-[1em] rounded-lg'>
            <p> "The ZenGlow Spa and Wellness Retreat was a life-changing experience. The spa treatments were heavenly, and the serene natural surroundings provided the perfect backdrop for relaxation. I left feeling refreshed and recharged."</p>
            <div className='flex'>
                <img src="" alt="" />
                <div>
                    <p>Anna B.</p>
                    {/* <p>CEO of B.Tech Solutions</p> */}
                </div>
            </div>
        </div>
        )
    }

    return(
        <section className='bg-[#f9f6e7]'>
            <div className='h-fit w-[100%] grid grid-cols-3'>
                {[...Array(3)].map((x, key) => <Image val={key} key={key}/>)}
              {/* {imgs.map((img, key) => <Image img={img} val={key} key={key}/>)} */}
            </div>
            <div id='home-reviews-content' className='p-[1.5em]'>
                <h3 className='text-[0.5em] mb-[5em] text-center'>REVIEWS</h3>
                <div id='home-reviews-list' className='scroll pb-[1.5em] flex flex-nowrap 
                overflow-x-auto gap-[2em]'>
                   {[...Array(5)].map((x, key) => <Review/>)}
                   <button className='border-2 border-black rounded-full h-fit p-[1em] text-[0.75em]'>See more</button>
                </div>
            </div>
        </section>
    )
}