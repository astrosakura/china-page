import React, { useState } from "react";
import "./Home.css";
import FlightIcon from '@material-ui/icons/Flight';
import HotelIcon from '@material-ui/icons/Hotel';
import {Link} from "react-router-dom";
import img1 from "./Images/great-wall1.jpg";
import img2 from "./Images/bund.jpg";
import img3 from "./Images/suzhou-garden.jpg";
import { Button } from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';


const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="text">
	{isReadMore ? text.slice(0, 200) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};

const Home = () => {
return (

	<div className="container">

<h2>China Tourist Places</h2>                      

<div class="card">
  <img class = "img-1" src= {img1} alt="Great Wall"/>
  <div class="container">
    <h4><b>The Great Wall</b></h4> 
    <h5>Location: <span>Huairou District, China</span></h5>
	<p>
		<ReadMore>
        The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng) is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC,[2] with selective stretches later joined together by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains.[3] Later on, many successive dynasties built and maintained multiple stretches of border walls. The most well-known sections of the wall were built by the Ming dynasty (1368–1644).
       </ReadMore>
	</p>
   
	
   <div>
	  
  <Button class = {"external-page1"} component = {Link} to =  "/great-wall-hotel-booking"><HotelIcon/></Button>
  <Button class = {"external-page2"} component = {Link} to= "/great-wall-flight-booking"><FlightIcon /></Button>
<Button class = {"external-page3"} component={Link} to= "/great-wall" color="primary"><RoomIcon/></Button>


</div>
    </div>
    </div>


	<div class="card">
  <img class = "img-1" src= {img2} alt="The Bund "/>
  <div class="container">
    <h4><b>The Bund</b></h4> 
    <h5>Location: <span>Shanghai China</span></h5>
	<p>
   <ReadMore>
        The Bund or Waitan is a waterfront area and a protected historical district in central Shanghai. The area centers on a section of Zhongshan Road within the former Shanghai International Settlement, which runs along the western bank of the Huangpu River in the eastern part of Huangpu District.
	</ReadMore>
	</p>
    
	<Button class = {"external-page1"} component = {Link} to = "/bund-hotel-booking"><HotelIcon/></Button>
  <Button class = {"external-page2"} component={Link} to=  "/bund-flight-booking" color="primary"><FlightIcon/></Button>
  <Button class = {"external-page3"} component={Link} to= "/bund" color="primary"><RoomIcon/></Button>

    </div>
    </div>



	<div class="card">
  <img class = "img-1" src= {img3} alt="Classical Gardens of Suzhou"/>
  <div class="container">
    <h4><b>Classical Gardens of Suzhou</b></h4> 
    <h5>Location: <span>Gusu District, Suzhou, Jiangsu, China</span></h5>
	<p>
		  <ReadMore>
          The Classical Gardens of Suzhou (Chinese: 苏州园林; pinyin: Sūzhōu yuánlín) are a group of gardens in Suzhou region, Jiangsu province, China, which have been added to the UNESCO World Heritage List.
          Spanning a period of almost one thousand years, from the Northern Song to the late Qing dynasties (11th-19th century), these gardens, most of them built by scholars, standardized many of the key features of classical Chinese garden design with constructed landscapes mimicking natural scenery of rocks, hills and rivers with strategically located pavilions and pagodas
       </ReadMore>
	</p>
    
  <Button class = {"external-page1"} component = {Link} to = "/suzhou-garden-hotel-booking"><HotelIcon/></Button>
  <Button class = {"external-page2"} component={Link} to=  "/suzhou-garden-flight-booking" color="primary"><FlightIcon/></Button>
  <Button class = {"external-page3"} component={Link} to= "/classical-gardens-of-suzhou" color="primary"><RoomIcon/></Button>

    </div>
    </div>

    </div>    
);
};

export default Home;
