import { Link, useLocation, redirect } from "react-router-dom";

import Logo from '../assets/logo.png'

import ServicesList from '../assets/services-info.json'


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
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }

        return(
            <li id={id} className='nav-link text-[#FFFAE4] font-bold text-[1em] '>
                <button onClick={handleContact}>{title}</button>
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
   const services = ServicesList.services;

    return(
        <nav id='nav-bar' className='fixed h-fit w-full px-[2em] flex justify-between text-[0.75em] items-center'>
            <ul id='nav-bar-main' className='flex gap-5 items-center'>
                <img src={Logo} alt='Zenwell Co. Logo' id='header-logo' />
                <NavLink title='Home' src='/' id='link-home'></NavLink>
                <div className='dropdown float-left overflow-hidden'>
                    <button className='dropbtn'>Services</button>
                    <div className='dropdown-content'>
                        {services.map((service, key) => 
                        <a href={`/services/${service.id}`} key={key}>{service.title}</a>)}
                    </div>
                </div>
                <NavLink title='About Us' src='/about' id='link-about'></NavLink>
                <NavLink title='Contact' ></NavLink>   
            </ul>

            <ul>
                <NavLink title='Book a consultation' src='/consultation' id='link-consultation'></NavLink>
            </ul>
        </nav>
    )
}