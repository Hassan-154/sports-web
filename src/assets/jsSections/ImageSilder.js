import React from 'react'
import { Carousel } from 'react-carousel-minimal';
function ImageSilder() {


    const data = [
      {
        image: "https://images3.alphacoders.com/206/thumb-1920-206717.jpg",
        caption: "Golf"
      },
        {
            image: "https://images8.alphacoders.com/575/thumb-1920-575648.jpg",
            caption: "Volleyball"
          },
        {
            image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            caption: "Swimming"
          },
          {
            image: "https://images5.alphacoders.com/436/thumb-1920-436417.jpg",
            caption: "Tennis"
          },
        {
          image: "https://images.unsplash.com/photo-1432753759888-b30b2bdac995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1594&q=80",
          caption: "Athletism"
        },
        {
          image: "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80",
          caption: "Futsal"
        },
        {
            image: "https://images.unsplash.com/photo-1509586721451-a990371f8243?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1429&q=80",
            caption: "Basket"
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

     </div>
    )
}

export default ImageSilder
