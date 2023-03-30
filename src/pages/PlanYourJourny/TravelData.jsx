import React from 'react'
import styled from 'styled-components'


function TravelData() {
  return (
    <Container>
    <Left></Left>
     <Mid>
        <Place>
         <div className='from'>
         <p>From</p>
            <form>
                <input type="text" id='textboxid' placeholder='New Delhi' size="10"></input>
            </form>
         </div>
         <div className='to'>
         <p>To</p>
            <form>
                <input type="text" id='textboxid' placeholder='Mumbai' size="10"></input>
            </form>
         </div>
        </Place>
        <JournyDate>

        </JournyDate>
        <Budget>

        </Budget>
    </Mid>
    <Right></Right>
     

    </Container>
  )
}

export default TravelData

const Container=styled.div`
height: 25rem;
display:flex;
`

const Place=styled.div`
height:6.25rem;
width:17.5rem;
background-color:#F9E8E8;
display:flex;
justify-content:space-between;

input{
    border-width:0px;
    background-color:#F9E8E8;
}

#textboxid{
    height:2rem;
    font-size:20px;
}
`
const JournyDate=styled.div`
height:6.25rem;
width:17.5rem;
background-color:#F9E8E8;
`
const  Budget=styled.div`
height:6.25rem;
width:15rem;
background-color:#F9E8E8;
`

const Left=styled.div`
width:9%;
`
const Right=styled.div`
width:9%;
`
const Mid=styled.div`
width:82%;
display:flex;
justify-content:space-around;
align-items: center; 
`


