import React, { useState } from 'react'
import "./CityHotel.css"
import img1 from "../Images/bund-hotel1.jpg";
import img2 from "../Images/bund-hotel2.jpg";
import RoomIcon from '@material-ui/icons/Room';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';


const Modal= () => {

    const [isAuth, setIsAuth] = useState(true);
    if(!isAuth) {
        return <Redirect to = "/hotel-check-in"/>    
    }

    return (
       <>

        <div className = "cardHotel">
        <div className = "hotelBody">
        <img class = "img-hotel" src= {img1}/>
        <div className = "text-wrap-image">
            Shanghai, China <br/>
            <h2 style = {{marginRight: '5%', marginBottom: '-1%'}}>Fairmont Peace Hotel</h2><br/>
            <p><RoomIcon style = {{marginLeft: '9%', color: 'grey'}}/> The Bund • 170 m away</p>
            <p style = {{marginBottom: '-5%'}}>
             <span><StarIcon style = {{color: 'orange', marginLeft :'10%'}}/></span>
             <span><StarIcon style = {{color: 'orange'}}/></span>
             <span><StarIcon style = {{color: 'orange'}}/></span>
             <span><StarIcon style = {{color: 'orange'}}/></span>
             <span><StarHalfIcon style = {{color: 'orange'}}/>4.5 Rating</span>
             <br/>
             </p><br/>
             <h3 style = {{marginLeft: '27rem', marginTop: '5%'}}>₹16,406</h3><br/>
             <p style = {{marginLeft :'27rem', marginTop: '-3%'}}>/per night</p>

              <Button onClick = {() => {setIsAuth(false)}}
             style = {{
                 marginTop: '-4%',
                 float: 'right',
                 backgroundColor: '#000',
                 color: 'white',
             }}
             >Book Now</Button> 
            
        </div>
        </div>
        </div>
      
        
        <div className = "cardHotel">
        <div className = "hotelBody">
        <img class = "img-hotel" src= {img2}/>
        <div className = "text-wrap-image">
            Shanghai, China <br/>
            <h2 style = {{marginRight: '5%', marginBottom: '-1%'}}>The Peninsula Shanghai</h2><br/>
            <p><RoomIcon style = {{marginLeft: '9%', color: 'grey'}}/>The Bund • 180 m away</p>
            <p style = {{marginBottom: '-5%'}}>
             <span><StarIcon style = {{color: 'orange', marginLeft :'10%'}}/></span>
             <span><StarIcon style = {{color: 'orange'}}/></span>
             <span><StarIcon style = {{color: 'orange'}}/></span>
             <span><StarIcon style = {{color: 'orange'}}/>3.5 Rating</span>
             <br/>
             </p><br/>
             <h3 style = {{marginLeft: '27rem', marginTop: '5%'}}>₹4,489</h3><br/>
             <p style = {{marginLeft :'27rem', marginTop: '-3%'}}>/per night</p>

              <Button  onClick = {() => {setIsAuth(false)}}
             style = {{
                 marginTop: '-4%',
                 float: 'right',
                 backgroundColor: '#000',
                 color: 'white',
             }}
             >Book Now</Button> 
            
        </div>
        </div>
        </div>

        </>

    )
}

export default Modal
