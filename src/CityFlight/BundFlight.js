import React from 'react'
import "./CityFlight.css";
import {Link} from "react-router-dom";
import { Button } from "@material-ui/core";




function BundFlight() {
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
    <td>SHAN652309817</td>
    <td>Dr. Babasaheb Ambedakar International Airport, Nagpur</td>
    <td>Shanghai Hongqiao International Airport, Shanghai</td>
    <td>31-08-2021 9:30pm</td>
    <td>01-09-2021 9.45am</td>
    <td>₹30,000</td>
    <td>
      <Button  
         style = {{backgroundColor: 'black', padding: '6px 20px', color: 'lightgrey'}}
         component={Link} to= "/bund-flight-check-in" >
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
   <td>PAUD561092837</td>
    <td>Dr. Babasaheb Ambedakar International Airport, Nagpur</td>
    <td>Shanghai Pudong International Airport, Shanghai</td>
    <td>15-08-2021 11:30pm</td>
    <td>17-08-2021 3.45am</td>
    <td>₹19,432</td>
    <td>
      <Button  
         style = {{backgroundColor: 'black', padding: '6px 20px', color: 'lightgrey'}}
         component={Link} to= "/bund-flight-check-in" >
         <span >Book</span>
      </Button>
     </td> 
  </tr>
  </div>
</table>

          </div>
          
    )
}

export default BundFlight
