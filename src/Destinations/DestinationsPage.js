import CallApiTripList from "./CallApiTripList";
import campfire_field from '../Assets/campfire_field.jpg'
import TopBanner from "../TopBanner";

const DestinationsPage = () => {
    const api_url = 'https://trip-itinerary-backend-api.herokuapp.com/api/v1/trips'

    return (
        <>
        <TopBanner 
            image={campfire_field} 
            position={"50% 50%"}
            text={"DESTINATIONS"}/>

            <CallApiTripList api_url={api_url}/>
        </>
    );
}
 
export default DestinationsPage;
