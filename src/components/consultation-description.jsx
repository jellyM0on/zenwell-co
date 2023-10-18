import ConsultationInfo from '../assets/consultation-info.json'

function List({title, listItems}){
    return(
        <div>
             <h2 className='text-[#2F3520] text-[0.5em] mt-[2em] mb-[1em] text-center'>
                {title}
            </h2>
            <ul className='list-decimal ml-[1em]'>    
                {listItems.map((item, key) => 
                <li className='mb-1' key={key}> 
                    <p><span className='font-bold'>{item[0]}: </span>{item[1]}</p>
                </li>)}
            </ul>
        </div>
    )
}

export default function ConsultationDescription(){

    const onSiteProcess = ConsultationInfo.onSiteProcess; 
    const onlineProcess = ConsultationInfo.onlineProcess; 
    
    return(
        <section className=''>
            <h1 className='font-bold text-[4em] leading-[0.75em] mb-[1em]'>Consultation</h1>
            <div className='w-[75%]'>
                <List title="ON-SITE CONSULTATIONS" listItems={onSiteProcess}/>
                <List title="ONLINE CONSULTATIONS" listItems={onlineProcess}/>
            </div>
        </section>
    )
}