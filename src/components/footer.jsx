import Logo from '../assets/logo.png'

export default function Footer(){
    return(
        <footer className='grid grid-cols-3 h-fit w-full bg-[#1d2014fe] items-center
         px-[2em] py-[0.5em] text-[0.75em] text-[#FFFAE4]'>
            <p>Privacy Policy</p>
            <div className='flex flex-col items-center justify-center text-center'>
                <img src={Logo} alt="Logo" className='w-[1.5em]'/>
                <p>&copy; Zenwell Co.</p>
            </div>
        </footer>
    )
}