import './App.css';
import Home from "./Home"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import GreatWall from "./Map/GreatWall";
import Bund from "./Map/Bund";
import SuzhouGarden from "./Map/SuzhouGarden";

//************************************  MAP COMPONENT  ************************************************/

import BundHotelBooking from "./CityHotel/BundHotelBooking";
import SuzhouHotelBooking from "./CityHotel/SuzhouHotelBooking";
import GreatWallHotelBooking from "./CityHotel/GreatWallHotelBooking";

import HotelCheckIn from './HotelCheckIn/HotelCheckIn';
import HotelConfire from "./HotelConfire/HotelConfire";


import GreatWallFlight from "./CityFlight/GreatWallFlight";
import BundFlight from './CityFlight/BundFlight';
import SuzhouFlight from "./CityFlight/SuzhouFlight";

import  GreatWFlightCheckin from "./FlightCheckIn/GreatWFlightCheckin";
import BundFlightCheckIn from './FlightCheckIn/BundFlightCheckIn';
import SuzhouFlightCheckIn from "./FlightCheckIn/SuzhouFlightCheckIn";


import GreatWFlightConfire from "./FlightConfire/GreatWFlightConfire";
import BundFlightConfire from "./FlightConfire/BundFlightConfire";
import SuzhouFlightConfire from "./FlightConfire/SuzhouFlightConfire";

import Payment from "./PayMent/Payment";


function App() {
  return (
    <Router>
      <div className = "App">
        <Switch>
           <Route exact path="/" component = {Home}/>

           <Route path="/great-wall" component={GreatWall} />
           
           <Route path="/bund" component={Bund} />
          
           <Route path="/classical-gardens-of-suzhou" component={SuzhouGarden} />
          
           
      
          {/******************************************************************************************/}


            <Route path = "/great-wall-hotel-booking" component = {GreatWallHotelBooking} />
            <Route path = "/bund-hotel-booking" component = {BundHotelBooking} />
            <Route path = "/suzhou-garden-hotel-booking" component = {SuzhouHotelBooking} />

            <Route path = "/hotel-check-in" component = {HotelCheckIn} />
            <Route path = "/hotel-confire" component = {HotelConfire} />


            <Route path = "/great-wall-flight-booking" component = {GreatWallFlight}/>
            <Route path = "/bund-flight-booking" component = {BundFlight}/>
            <Route path = "/suzhou-garden-flight-booking" component = {SuzhouFlight}/>
            
             
            <Route path = "/great-wall-flight-check-in" component = {GreatWFlightCheckin}/>
            <Route path = "/bund-flight-check-in" component = {BundFlightCheckIn}/>
            <Route path = "/suzhou-garden-flight-check-in" component = {SuzhouFlightCheckIn}/>
            

            <Route path = "/flight-confire-to-great-wall" component = {GreatWFlightConfire}/>
            <Route path = "/flight-confire-to-bund" component = {BundFlightConfire}/>
            <Route path = "/flight-confire-to-suzhou-garden" component = {SuzhouFlightConfire}/>


            <Route path="/payment" component={Payment} />

           
           
          

           </Switch>
           </div>
           </Router>
  );
}

export default App;
