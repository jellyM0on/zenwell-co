import { useState } from "react";



export default function ContactForm() {
    const [inputs, setInputs] = useState(); 

    function handleSubmit(e){
        e.preventDefault(); 

        const responses = []; 
        const responseNodes = document.querySelectorAll('.contact-input');
        responseNodes.forEach((response, x) => responses[x] = response.value); 
        setInputs(responses); 
        console.log(responses); 
    }

    return(
        <section className='grid grid-cols-2 py-[2em] pr-[2em] bg-[#f9f6e7] items-center'>
            <form id='contact-form' className='flex flex-col bg-[#707a4cfe] text-[#FFFAE4]
            p-[2em]'>
                <h3 className='font-bold mb-[1em] text-[1.5em]'>Send us a message</h3>
        
                <label htmlFor="contact-name"></label>
                <input type="text" name="contact-name" id="contact-name" 
                placeholder="Your name" className='contact-input'/>
      

                <label htmlFor="contact-email"></label>
                <input type="email" name="contact-email" id="contact-email"
                 placeholder="you@domain.com" className='contact-input'/>  
                
                <label htmlFor="contact-subject"></label>
                <input type="text" name="contact-subject" id="contact-subject"
                 placeholder="Subject" className='contact-input'/>

                <label htmlFor="contact-msg"></label>
                <textarea name="contact-msg" id="contact-msg" 
                placeholder="Your message..." cols="30" rows="5" className='contact-input'></textarea>
                
                <button type="submit" onClick={handleSubmit} className='hover:underline mt-[1em] w-fit self-end'>Submit &gt;</button>
            </form>

            <div className='flex flex-col items-end gap-[2em] text-[#565B2D]'>
                <h2 className='text-[2.5em] w-[75%] text-right font-bold 
                border-t-[0.5em] pt-[1em] border-[#707a4cfe] leading-[0.95em]'>Let us help you with your wellness journey</h2>
                <div className='text-right flex flex-col w-[75%]'>
                    <p className='font-semibold text-[1.5em] mb-[0.75em]'>Get in touch with us at</p>
                    <p>zenwellco@fakemail.com / +63 123 45678</p>
                    <p className='mb-[0.75em]'>South Dakota, Port Priscillastad, 678 Frederik Prairie </p>
                    <p>or <span> <button className=' p-[0.5em] bg-[#565B2D] rounded-lg w-fit text-white border-2 border-[#565B2D]
                hover:bg-white hover:text-[#565B2D]'>Book a consultation &gt;</button></span></p>
                </div>
            </div>

        </section>
    )
}