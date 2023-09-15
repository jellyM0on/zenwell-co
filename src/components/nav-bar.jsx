import { Link, useLocation } from "react-router-dom";

import Logo from '../assets/logo.png'

const NavLink = ({title, src}) => {
    let location = useLocation(); 

    if(location.pathname === src){
        return(
            <li id={src} class='nav-link line-through text-[#FFFAE4] font-bold text-[1em]'>
            <Link to={src}>{title}</Link>
        </li>
        )
    }
    
    return(
        <li id={src} class='nav-link text-[#FFFAE4] font-bold text-[1em]'>
            <Link to={src}>{title}</Link>
        </li>
    )
}

export default function NavBar(){
    return(
        <nav id='nav-bar' className='fixed h-fit w-full p-5 flex justify-between'>
            <ul className='flex gap-5 items-center'>
                <img src={Logo} alt='Zenwell Co. Logo' id='header-logo' />
                <NavLink title='Home' src='/'></NavLink>
                <NavLink title='Services' src='/services'></NavLink>
                <NavLink title='About Us' src='/about'></NavLink>
                <NavLink title='Contact' src='/contact'></NavLink>   
            </ul>

            <ul>
                <NavLink title='Book a consultation' src='/consultation'></NavLink>
            </ul>
            
        </nav>
    )
}