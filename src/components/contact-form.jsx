import { useState } from "react";
import { Link } from "react-router-dom";

import { useForm } from 'react-hook-form'; 
import { zodResolver } from '@hookform/resolvers/zod'; 
import { z } from "zod"; 

const schema = z.object({
    name: z.string().min(3, {message: 'Name must have at least 3 characters.'}), 
    email: z.string().email({message: 'Email must be valid.'}), 
    subject: z.string().min(3, {message: 'Subject must have at least 3 characters.'}), 
    msg: z.string().min(3, {message: 'Message must have at least 3 characters.'})
        .max(250, {message: 'Message must not exceed 250 characters.'})
})

export default function ContactForm() {
    const { register, handleSubmit, formState } = useForm({resolver: zodResolver(schema)} ); 
    const { errors } = formState; 

    function handleSave(inputs){
        console.log(inputs); 
    }

    return(
        <section className='grid grid-cols-2 py-[2em] pr-[2em] bg-[#f9f6e7] items-center'>
            <form onSubmit={handleSubmit(handleSave)} id='contact-form' className='flex flex-col 
            bg-[#707a4cfe] text-[#FFFAE4] p-[2em] '>
                <h3 className='font-bold mb-[1em] text-[1.5em]'>Send us a message</h3>

                <input type="text" placeholder="Your name"
                className={`${!errors.name?.message ? "contact-input" : "input-invalid"}`} {...register("name")}/>
                <p>{errors.name?.message}</p>
      
                <input type="email" {...register("email")}
                 placeholder="you@domain.com"  className={`${!errors.email?.message ? "contact-input" : "input-invalid"}`}/>  
                <p>{errors.email?.message}</p>

                <input type="text" {...register("subject")}
                 placeholder="Subject"  className={`${!errors.subject?.message ? "contact-input" : "input-invalid"}`}/>
                <p>{errors.subject?.message}</p>

                <textarea {...register("msg")} id="contact-msg" 
                placeholder="Your message..." cols="30" rows="5"  className={`${!errors.msg?.message ? "contact-input" : "input-invalid"}`}>
                </textarea>
                <p>{errors.msg?.message}</p>

                <button type="submit" className='hover:underline mt-[1em] w-fit self-end'>Submit &gt;</button>
            </form>

            <div className='flex flex-col items-end gap-[2em] text-[#565B2D]'>
                <h2 className='text-[2.5em] w-[75%] text-right font-bold 
                border-t-[0.5em] pt-[1em] border-[#707a4cfe] leading-[0.95em]'>Let us help you with your wellness journey</h2>
                <div className='text-right flex flex-col w-[75%]'>
                    <p className='font-semibold text-[1.5em] mb-[0.75em]'>Get in touch with us at</p>
                    <p>zenwellco@fakemail.com / +63 123 45678</p>
                    <p className='mb-[0.75em]'>South Dakota, Port Priscillastad, 678 Frederik Prairie </p>
                    <p>or <span> <Link to='/consultation' className=' p-[0.5em] bg-[#565B2D] rounded-lg w-fit text-white border-2 border-[#565B2D]
                hover:bg-white hover:text-[#565B2D]'>Book a consultation &gt;</Link></span></p>
                </div>
            </div>
        </section>
    )
}