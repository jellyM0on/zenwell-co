import { Outlet, Link } from "react-router-dom";

const NavLink = ({title, src}) => {
    return(
        <li id={src} class='nav-link text-[#FFFAE4] font-bold text-[1em]'>
            <Link to={src}>{title}</Link>
        </li>
    )
}

export default function NavBar(){
    return(
        <nav id='nav-bar' className='fixed h-fit w-full p-5 flex justify-between'>
            <ul className='flex gap-5'>
                <NavLink title='Services' src='test'></NavLink>
                <NavLink title='About Us' src='test'></NavLink>
                <NavLink title='Contact' src=''></NavLink>   
            </ul>

            <ul>
                <NavLink title='Book a consultation' src='consultation'></NavLink>
            </ul>
            
        </nav>
    )
}