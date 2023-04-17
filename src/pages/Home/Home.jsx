import React from 'react'
import ImageSection from './ImageSection'
// import NewsSection from './NewsSection'
import Regions_of_India from './Regions_of_India/Regions_of_India'
import Strategies from './Strategies'
import Popular from './Popular'
import Explore from './Explore'
import styled from 'styled-components'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Header/footer'


function Home() {
  return (
    <Container >
      <Header />
      <ImageSection />
      {/* <NewsSection /> */}
      <Regions_of_India />
      <Strategies />
      <Popular />
      <Explore />
      <Footer />
    </Container>
  )
}

export default Home

const Container=styled.div`
padding-top: 8.5rem;
`