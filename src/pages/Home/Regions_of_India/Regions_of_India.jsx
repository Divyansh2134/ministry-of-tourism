import React from 'react'
import styled from 'styled-components'

import SvgComponent from './India2.jsx';

function Regions_of_India() {
  return (
    <Container>
      
      <Mid>
        {/* <h2>Regions of India</h2>
         */}
             <span>
      {/* <StateContent id={}/> */}
      <Heading><h2>Regions Of India</h2></Heading>    
      <SvgComponent />
      {/* {hoveredState && <h2>{this.hoveredState}</h2>} */}
    </span>
         
      </Mid>
      
    </Container>
  )
}

export default Regions_of_India

const Container=styled.div`
height:100vh;
max-width:100%; 
display:flex;

margin-top: 6vh !important;
margin-bottom: 5vh !important;
padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // max-height: 90vh;
  // max-width: 100vw;
  // height: 100vh;
  // width: 100vw;
`
const Heading=styled.div`
margin-left : 9vw
`
// const Left=styled.div`
// width:9%;
// `
// const Right=styled.div`
// width:9%;
// `
const Mid=styled.div`
width:82%;
`

//hhhhhhhhhj

// import React, { useState } from 'react';
// import SvgComponent from './India2.jsx';
// import StateContent from './MapContent.jsx';
// const IndiaMapInteractive = () => {


//   return (
//     <span>
//       {/* <StateContent id={}/> */}
//       <h1>Interactive India Map</h1>
//       <SvgComponent />
//       {/* {hoveredState && <h2>{this.hoveredState}</h2>} */}
//     </span>
//   );
// };

// export default IndiaMapInteractive;