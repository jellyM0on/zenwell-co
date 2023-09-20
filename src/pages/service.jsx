import ServiceDescription from "../components/service-description"
import ServiceInclusions from "../components/service-inclusions"
import ServicePackages from "../components/service-packages"

export default function Service(){
    return(
        <main>
            <ServiceDescription/>
            <ServiceInclusions/>
            <ServicePackages/>
        </main>
    )
}