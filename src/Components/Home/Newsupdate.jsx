import React from 'react'
import styled from 'styled-components'

function Newsupdate() {
  return (
    <Container>
     <Newssection>
     <div className='text'>NEWS<br />
      & 
      <br />
      UPDATES</div>
      <div className='news'>

      </div>
     </Newssection>
    </Container>
  )
}

export default Newsupdate

const Container=styled.div`
height:14.5rem;
white:100%;
display: flex;
align-items: center;
justify-content: center;
`
const Newssection=styled.div`
height:5.688rem;
width:76%;
display:flex;
.text{
width:10%;
height:100%;
display: flex;
    align-items: center;
    justify-content: center; 
font-family: 'Mulish';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 21px;
color: #000000;
}
.news{
    width:90%;
}
`