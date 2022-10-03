import React from 'react'
import styled from 'styled-components';
import Searchbar from './Searchbar/Searchbar';

function Header2 () {
  return (
    <Container>
      <Left></Left>
      <Mid>
        <div className='left'>
        <img src='/images/emblem.jpg' alt='img'></img>
        </div>
        <div className='leftspace'></div>
        <div className='mid'>
          <div className='Hover'>About us</div>
          <div className='Hover'>Tour package</div>
          <div className='Hover'>Type of travel</div>
          <div className='Hover'>Media</div>
          <div className='Hover'>Help</div>
        </div>
        <div className='rightspace'></div>
        <div className='right'>
         <Searchbar />
        </div>
      </Mid>
      <Right></Right>

    </Container>
  )
}

export default Header2;

const Container=styled.div`
position:fixed;
background-color:white;
width:100vw;
height:5.563rem;
Top:2.625rem;
display:flex;

`
const Left=styled.div`
width:12%;
height:5.563rem;
`
const Mid=styled.div`
width:76%;
height:5.563rem;
display:flex;
justify-content:space-between;
div{
    display:flex;
  justify-content: center;
    align-items: center;
    font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 25px;

color: rgba(37, 49, 60, 0.95);
}
img{
    width:100%;
    height:100%;
    object-fit: contain;
}
.left{
    width:13%;
}
.leftspace{
    width:7%;
}
.mid{
    width:60%;
    display:flex;
    justify-content:space-around;
}
.rightspace{
    width:7%;
    
}
.right{
    width:13%;
}
.Hover{
    cursor:pointer;
}

`
const Right=styled.div`
width:12%;
height:5.563rem;
`



