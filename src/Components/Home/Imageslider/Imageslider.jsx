// import React,{useState} from 'react';
// import styled from 'styled-components';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// const Imageslider = () => {
//    const sliderData=[
//     {image:'/images/image1.jpg',imagename:'image1'},
//     {image:'/images/image2.png',imagename:'image2'}
//    ]

//     const [currentSlide, setCurrentSlide] = useState(0);

//   return (
//     <Container>
//     <div className='slider'>
//       {/* <ChevronLeftIcon />
//       <ChevronRightIcon /> */}
//       {sliderData.map((slide,index) => {
//            return(
            
//             <div className={index===currentSlide?
//             "slide current":"slide"} key={index}>
//                 {index===currentSlide &&(
//                     <img src={slide.image} alt="slide" />
//                 )}
//             </div>
            
//            )
//       })}
//     </div>
//     </Container>
//   )
// }

// export default Imageslider

// const Container=styled.div`
// width:100%;
//  height:100%;
//  .slider{
//     width:100%;
//  height:100%;
//  }
// img{
//     width:100%;
//  height:100%;
// }

// `




import React from 'react'
import styled from 'styled-components'

function Imageslider() {
  


  return (
    <Slider>
      <img src='/images/image1.jpg' alt='img'></img>
    </Slider>
  )
}

export default Imageslider

const Slider=styled.div`
width:100%;
height:100%;
img{
    width:100%;
    height:100%;
}
`