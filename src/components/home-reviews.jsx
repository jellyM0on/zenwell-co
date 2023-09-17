// import HomeReviews1 from '../assets/home/home-reviews-1.jpg'
// import HomeReviews2 from '../assets/home/home-reviews-2.jpg'
// import HomeReviews3 from '../assets/home/home-reviews-3.jpg'

import Rating from '../assets/rating.png'

import Reviews from '../assets/reviews.json'

export default function HomeReviews(){

    const Image = ({val}) => {
        return(
            <div className='home-reviews-imgs' id={`home-reviews-img-${val}`}>
            </div>
        )
    }

    // <img src={img} alt="Review Image" className='h-[100%]' />
    const Review = ({name, review, profession}) => {

        let reviewText = review.split(" "); 
        if(reviewText.length > 40){
            reviewText = reviewText.slice(0, 40);
            // reviewText.push("..."); 
            reviewText = reviewText.join(' '); 
            review = reviewText + '...';  
        }

        return(
            <div className='flex flex-col justify-center items-center
            review-card w-[40vw] h-fit bg-white text-[#555d38fe]
            p-[1.5em] rounded-lg text-center'>
                <img src={Rating} alt="5 Stars" className='rating'/>
                <p className='mb-[1em] text-center'>{`" ${review} "`}</p>
                <p className='text-[0.75em] font-bold'>{name}</p>
                <i className='text-[0.75em]'>{profession}</i>
            
          
        </div>
        )
    }

    let allReviews = Reviews.reviews; 

    return(
        <section className='bg-[#f9f6e7]'>
            <div className='h-fit w-[100%] grid grid-cols-3'>
                {[...Array(3)].map((x, key) => <Image val={key} key={key}/>)}
              {/* {imgs.map((img, key) => <Image img={img} val={key} key={key}/>)} */}
            </div>
            <div id='home-reviews-content' className='p-[1.5em]'>
                <h3 className='text-[0.5em] mb-[5em] text-center'>REVIEWS</h3>
                <div id='home-reviews-list' className='scroll pb-[1.5em] flex items-center flex-nowrap 
                overflow-x-auto gap-[2em]'>
                   {allReviews.map((x, key) => <Review name={x.name} review={x.review} profession={x.profession} key={key}/>)}
                    <button className='border-2 border-[#555d38fe] rounded-lg h-fit
                     p-[1em] text-[0.5em] text-white bg-[#555d38fe] hover:bg-white hover:text-[#555d38fe]'> &gt;</button>
                </div>
            </div>
        </section>
    )
}