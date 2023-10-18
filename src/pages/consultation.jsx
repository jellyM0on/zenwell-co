import ConsultationDescription from "../components/consultation-description";
import ConsultationForm from "../components/consultation-form"

import ServicesList from '../assets/services-info.json'

const services = ServicesList.services;

export default function ConsultationBooking(){
    return(
      <main className='grid grid-cols-2 w-[100vw] min-h-[100vh] bg-[#f9f6e7] px-[2em] pt-[7em] text-[#565B2D]'>
        <ConsultationDescription/>
        <ConsultationForm services={services}/>
      </main>
    )
}