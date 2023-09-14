import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError(); 
    
    return(
        <div>
            <h1>An unexpected error occured</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    )

}