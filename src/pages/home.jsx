import NavBar from "../components/nav-bar"
import Hero from "../components/hero"
import HeroDescription from "../components/hero-description"
import HeroDescription2 from "../components/hero-description2"
import HomeServices from "../components/home-services"

export default function Home(){
    return(
        <main>
            <NavBar/>
            <Hero/>
            <HeroDescription2/>

            <HomeServices/>
            
        </main>
       
    )
    //navbar 
    //hero 
    //products
    //testimonials
    //footer 
}