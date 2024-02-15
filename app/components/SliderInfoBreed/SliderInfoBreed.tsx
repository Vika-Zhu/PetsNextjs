'use client';

import React from 'react';
import { useState } from 'react';

export function SliderInfoBreed (breedImages:any){
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleDotClick = (index:any) => {
      setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === breedImages.length - 1 ? 0 : currentSlide + 1)
    }

    return(
        <div className="breed-foto__slider">
            <div className="breeds-foto__slides-list">
                {breedImages.map((item:any, index: any) => (
                <img key={item.id}
                src={item.url}
                alt={`cat-foto-${item.id}`}
                className={currentSlide === index ? 'slide' : "slide slide-hidden"}
                onClick={nextSlide}/>
                ))}
            </div>
            <div className="slide-indicator">
                {breedImages.map((item:any, index:any) => (
                <div
                    key={item.id}
                    className={`dot ${currentSlide === index ? 'dot-active' : ''}`}
                    onClick={() => handleDotClick(index)}
                ></div>
            ))}
        </div>
    </div>
    )
}





// import React, { useState } from 'react';

// const Slider = ({ images }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="breed-foto">
//       <div className="breeds-foto__slide">
//         {images.map((image, index) => (
//           <img key={index} src={image.url} alt={`cat-foto-${index}`} />
//         ))}
//       </div>
//       <div className="slide-indicator">
//         {images.map((_, index) => (
//           <a
//             key={index}
//             className={`dot ${currentSlide === index ? 'dot-active' : ''}`}
//             onClick={() => handleDotClick(index)}
//             href="#"
//           ></a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
