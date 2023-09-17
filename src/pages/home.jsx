import NavBar from "../components/nav-bar"
import Hero from "../components/hero"
import HeroDescription from "../components/hero-description"
import HeroDescription2 from "../components/hero-description2"
import HomeServices from "../components/home-services"
import HomeDescription from "../components/home-description"
import HomeReviews from "../components/home-reviews"


export default function Home(){
    return(
        <main>
            <NavBar/>
            <Hero/>
            <HeroDescription2/>
            <HomeServices/>
            <HomeDescription/>
            <HomeReviews/>

        </main>
       
    )
    //navbar 
    //hero 
    //products
    //testimonials
    //footer 
}