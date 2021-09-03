import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import LocationsCards from '../jsSections/LocationsCards';
function Locations() {


    const data = [
      {
        image: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        caption: "Location Name"
      },
        {
            image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80",
            caption: "Location Name"
          },
        {
            image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1424&q=80',
            caption: "Location Name"
          },
      ];
      
  const captionStyle = {
    fontSize: '3em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
    return (
 <div className="page">
       <div className="imageSlier__container">
            <div className="App">
        <div style={{ textAlign: "center" }}>
          <div style={{
            padding: "0px 0px"
          }}>
            <Carousel
              data={data}
              time={2000}
              width="100%"
              height="60vh"
              captionStyle={captionStyle}
              radius="0px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              style={{
                textAlign: "center",
                Width: "100%",
                Height: "100vh",
                margin: "0px auto",
              }}
            />
          </div>
        </div>
      </div>
      <LocationsCards/>
     </div>
 </div>
    )
}

export default Locations
