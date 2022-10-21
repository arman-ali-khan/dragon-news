
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const BrandCaruosel = () => {
    return (
        <div>
              <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png"
          alt="Second slide"
        />

      </Carousel.Item>
     
    </Carousel>
        </div>
    );
};

export default BrandCaruosel;