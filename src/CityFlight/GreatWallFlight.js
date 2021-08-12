import React from 'react'
import "./CityFlight.css";
import {Link} from "react-router-dom";
import { Button } from "@material-ui/core";




function GreatWallFlight() {
    return (
        <div>
          <h2>All Flight</h2>

<table class = "center">
  <div className = "card3">
  <tr>
    <th>Number</th>
    <th>Source</th>
    <th>Destination</th>
    <th>Arrival</th>
    <th>Departure</th>
    <th>Price</th>
    <th>Book</th>
  </tr>
  

  <tr>
    <td>BEIJ298754653</td>
    <td>Dr. Babasaheb Ambedakar International Airport, Nagpur</td>
    <td>Beijing Capital Airport, Beijing</td>
    <td>04-09-2021 1:30pm</td>
    <td>05-092021 9.45am</td>
    <td>₹1,35,908</td>
    <td>
      <Button  
         style = {{backgroundColor: 'black', padding: '6px 20px', color: 'lightgrey'}}
         component={Link} to="/great-wall-flight-check-in" >
         <span >Book</span>
      </Button>
    </td>
  </tr>
  </div>

  <div className = "card3">
  <tr>
    <th>Number</th>
    <th>Source</th>
    <th>Destination</th>
    <th>Arrival</th>
    <th>Departure</th>
    <th>Price</th>
    <th>Book</th>
  </tr>
  <tr>
   <td>NANY0912347</td>
    <td>Dr. Babasaheb Ambedakar International Airport, Nagpur</td>
    <td>Nanyuan Airport, Beijing</td>
    <td>29-08-2021 11:30pm</td>
    <td>30-08-2021 3.45am</td>
    <td>₹1,09,432</td>
    <td>
      <Button  
         style = {{backgroundColor: 'black', padding: '6px 20px', color: 'lightgrey'}}
         component={Link} to="/great-wall-flight-check-in" >
         <span >Book</span>
      </Button>
     </td> 
  </tr>
  </div>
</table>

          </div>
          
    )
}

export default GreatWallFlight
