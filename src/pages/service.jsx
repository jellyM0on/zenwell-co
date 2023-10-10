import {  useParams } from 'react-router-dom';

import ServicesList from '../assets/services-info.json'

import ServiceDescription from "../components/service-description"
import ServiceInclusions from "../components/service-inclusions"
import ServicePackages from "../components/service-packages"
import ServiceVideo from '../components/service-video';

import ErrorPage from './error';
function Page({servicesId}){


    const services = ServicesList.services;
    const serviceInfo = services.find(s => (s.id === servicesId)); 

   
 
    return(
        <main>
            <ServiceDescription info={serviceInfo}/>
            <ServiceVideo/>
            <ServiceInclusions info={serviceInfo.inclusions}/>
            <ServicePackages info={serviceInfo.packages} 
            accomodation={serviceInfo.accomodation}/>
         </main>
    )
}

export default function Service(){
    const { servicesId } = useParams(); 

    return <Page servicesId={servicesId}/>;
}
