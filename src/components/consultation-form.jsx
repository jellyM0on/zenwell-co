import { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form'; 
import { zodResolver } from '@hookform/resolvers/zod'; 
import validator from "validator";
import { z } from "zod"; 

const basicStringSchema = z.string().min(2, {message: 'Must have at least 2 characters.'})

const schema = z.object({
    firstName: basicStringSchema, 
    lastName: basicStringSchema, 
    occupation: basicStringSchema, 
    company: basicStringSchema, 
    email: z.string().email({message: 'Must be a valid email.'}).refine(validator.isEmail, {message: 'Must be a valid email.'}), 
    phoneNumber:  z.string().refine(validator.isMobilePhone, {message: 'Must be a valid phone number.'}),
    addInfo: z.string().max(800, {message: 'Must not exceed 800 characters.'}), 

    meetingType: z.string(),
    meetingTime: z.string({message: 'Must choose a valid time.'}),
    meetingDate: z.string().refine(validator.isDate, {message: 'Must choose a valid date.'}), 
    services: z.array(z.string(), {invalid_type_error: "Must choose at least 1 option."}).nonempty({message: 'Must choose at least 1 option.'})
  
});

const SubmissionNotification = ({state}) =>{
    if(state === 1){
        return(
            <p className='bg-[#38411cfe]  w-full text-center text-[#FFFAE4] p-1'>
                Booked successfully! <br></br> 
                Please check your email to confirm the appointment.
            </p>
        )
    } else if(state === 'fail'){
        return(
            <p className='bg-red-900 w-full text-center text-[#FFFAE4] p-1'>
                Booking unsuccessful. <br></br>
                Please contact ZenWell Co. to book your appointment.
            </p> 
        )
    }
}

export default function ConsultationForm({services}){

    const { register, reset, formState, handleSubmit } = useForm({resolver: zodResolver(schema)} ); 
    const { errors } = formState; 

    const [submitSuccess, setSubmitSuccess] = useState(0);

    const InputField = ({label, name, type}) => {

        return(
            <div className='field-container'>
                <label htmlFor={name} className='text-[0.75em]'>{label}</label>
                <input type={type} name={name} id={name} {...register(`${name}`)} />
                <p className='text-[0.75em] text-red-900'>{errors[name]?.message}</p>
            </div>
         )
    }

    const ServicesField = ({service, id}) => {
        return(
            <div className=' m-0 grid grid-cols-6 items-center '>
                 <input className='w-[1em] h-[1em]' type="checkbox" value={service} id={`checkService${id}`}
                  name={`checkService${id}`} {...register('services')} />
                 <label htmlFor={`checkService${id}`} className='col-start-2 col-end-6'>
                    {service}
                </label>
            </div>
        )
    }

    function handleSave(inputs){
        console.log(inputs); 

        setSubmitSuccess(1); 
        reset(); 

        setTimeout(() => {
            setSubmitSuccess(0);
        }, 10000)
    }

    return(
        <section className='flex justify-center '>
            <form onSubmit={handleSubmit(handleSave)} action="" id='consultation-form'
            className='w-[75%] flex flex-col'>

                <fieldset>
                    <h2 className='font-bold text-center mb-[0.5em]'>Personal Information</h2>
                    <div className='section-container'>
                        <InputField label='First Name' name='firstName' type='string' />
                        <InputField label='Last Name' name='lastName'  type='string'/>
                    </div>
                    <div className='section-container'>
                        <InputField label='Company / Institution' name='company' type='string'/>
                        <InputField label='Occupation' name='occupation' type='string'/>
                    </div>
                </fieldset>
                
                <fieldset>
                    <h2 className='font-bold text-center mb-[0.5em]'>Contact Information</h2>
                    <div className='section-container'>
                        <InputField label='Email Address' name='email' type='email'/>
                        <InputField label='Phone Number' name='phoneNumber' type='number'/>
                    </div>
                </fieldset>

                <fieldset>
                    <h2 className='font-bold text-center mb-[0.5em]'> Appointment Information</h2>

                    <div className='field-container'>
                        <label htmlFor="meetingType" className='text-[0.75em] mr-[1em]'>Meeting Type</label>
                        <select name="meetingType" id="meetingType" className='bg-transparent border-b-2 border-black' 
                        {...register('meetingType')}
                      >
                            <option value="meeting-inperson">In-person - ZW Wellness Center</option>
                            <option value="meeting-online">Online - Google Meet</option>
                        </select>
                    </div>
                    

                    <div className='section-container'>
                        <InputField label='Preferred Date' name='meetingDate' type='date'/>
                        <div className='flex flex-col justify-center gap-[0.25em]'>
                            <label htmlFor="meetingTime" className='text-[0.75em]'>Preferred Time</label>
                            <select name="meetingTime" id="meetingTime" className='bg-transparent border-b-2 border-black' 
                            {...register('meetingTime')}>
                            {[8,10,12,14].map((hour, key) => 
                                <option value={hour} key={key}>{hour}:00</option>
                            )}
                            </select>
                        </div>
                      
                    </div>
                    <div className='mb-[0.5em]'>
                        <p className='text-[0.75em]'>Inquiring for</p>
                        {services.map((service, key) => 
                        <ServicesField service={service.title} key={key} id={key}/>)}
                        <p className='text-[0.75em] text-red-900'>{errors.services?.message}</p>
                    </div>     
                    <label htmlFor="moreInfo" className='text-[0.75em]' >Additional Information</label>
                    <textarea name="moreInfo" id="moreInfo" cols="50" rows="10" {...register('addInfo')}></textarea>
                    <p className='text-[0.75em] text-red-900'>{errors.addInfo?.message}</p>
                </fieldset>

                <button type='submit' className='hover:underline'>Submit &gt;</button>
                <SubmissionNotification state={submitSuccess}/>
            </form>
        </section>
    )
}