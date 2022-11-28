import React from 'react'
import styled from 'styled-components'

function Regions_of_India() {
  return (
    <Container>
      <Left></Left>
      <Mid>
        <h2>Regions of India</h2>
      </Mid>
      <Right></Right>
    </Container>
  )
}

export default Regions_of_India

const Container=styled.div`
height:90vh;
max-width:100%; 
display:flex;
`
const Left=styled.div`
width:9%;
`
const Right=styled.div`
width:9%;
`
const Mid=styled.div`
width:82%;
`
