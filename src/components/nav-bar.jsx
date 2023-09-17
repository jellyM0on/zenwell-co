import { Link, useLocation } from "react-router-dom";

import Logo from '../assets/logo.png'

const NavLink = ({title, src, id}) => {
    let location = useLocation(); 
    
    if(location.pathname === src){
        return(
            <li id={id} className='nav-link line-through text-[#FFFAE4] font-bold text-[1em]'>
            <Link to={src}>{title}</Link>
        </li>
        )
    }

    if(title === 'Contact'){

        function handleContact(){
            // const body = document.querySelector('#content'); 
            // body.scrollTop = body.scrollHeight;
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }

        return(
            <li id={id} className='nav-link text-[#FFFAE4] font-bold text-[1em]'>
                <Link to={src} onClick={handleContact}>{title}</Link>
            </li>
        )
    }

    return(
        <li id={id} className='nav-link text-[#FFFAE4] font-bold text-[1em]'>
            <Link to={src}>{title}</Link>
        </li>
    )
}

export default function NavBar(){
    return(
        <nav id='nav-bar' className='fixed h-fit w-full p-5 flex justify-between'>
            <ul id='nav-bar-main' className='flex gap-5 items-center'>
                <img src={Logo} alt='Zenwell Co. Logo' id='header-logo' />
                <NavLink title='Home' src='/' id='link-home'></NavLink>
                <NavLink title='Our Services' src='/services' id='link-services'></NavLink>
                <NavLink title='About Us' src='/about' id='link-about'></NavLink>
                <NavLink title='Contact' ></NavLink>   
            </ul>

            <ul>
                <NavLink title='Book a consultation' src='/consultation' id='link-consultation'></NavLink>
            </ul>
        </nav>
    )
}