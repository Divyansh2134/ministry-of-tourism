import React from 'react'
import styled from 'styled-components'
import Imageslider from './Imageslider/Imageslider'



function Imagesection() {
  return (
    <Box>
    <Top></Top>
    <Bottom>
      <Left></Left>
      <Mid>
        <Imageslider />
      </Mid>
      <Right></Right>
    </Bottom>
    </Box>
  )
}

export default Imagesection

const Box=styled.div`
height:34.125rem;
max-width:100%; 

`
const Top=styled.div`
height:3.381rem;
width:100%;
`
const Bottom=styled.div`
height:30.744rem;
width:100%;
display:flex;
`
const Left=styled.div`
width:12%;
`
const Mid=styled.div`
 width:76%;
 display:flex;
img{
    width: 100%;
    
}
`
const Right=styled.div`
width:12%;
`