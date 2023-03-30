import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Header/footer'
import styled from 'styled-components'


function PlanYourJourny() {
  return (
    <Container>
     <Header />

     <Title>
      <h1>Plan Your Budget <br/> Friendly Journy</h1>
     </Title>

     <Footer  />
    </Container>
  )
}

export default PlanYourJourny

const Container = styled.div`
padding-top: 8.5rem ;
`
const Title = styled.div`
top: 5.656 rem 
`


