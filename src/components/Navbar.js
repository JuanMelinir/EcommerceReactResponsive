import React, { useState } from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'
import tradeMark from '../assets/logoinsiders.png'
import {Link} from 'react-router-dom'
function Navbar() {
    const [click, setClick] = useState(false);
    console.log(click)
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <NavContainer className='NavContainer'>
            <Link to='/'><img src={tradeMark} width="150" height="40" className='imageLogo'></img></Link>
                <div className={`Links ${click ? 'active' : ''}`}>
                <Link to='/category/1' className="textLink">Anime</Link>
                <Link to='/category/2' className="textLink">Bandas</Link>
                <Link to='/category/3' className="textLink">Películas</Link>
                <Link to='/category/4' className="textLink">Clásicos</Link>
                <Link to='/category/5' className="textLink">Otros</Link>
                </div>
                <div className='burger'>
                    <BurgerButton click={click} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${click ? 'active' : ''}`}></BgDiv>
            </NavContainer>
            <div className='line'/>
        </>

    )
}
export default Navbar
const NavContainer = styled.nav`
h2{
    color:white;
}
padding:0.3rem;
background-color:white;
display:flex;
align-items:center;
justify-content:space-between;
a{
    color:#870C0C;/*white*/
    text-decoration:none;
    margin-right:1.3rem;
}
.burger{
@media(min-width:768px){
display:none;
}
}
.Links{
position:absolute;
top:-700px;
left:-200px;
right:0;
margin-left:auto;
margin-right:auto;
text-align:center;
transition: all .5s ease;
a{
color:white;
font-size:2rem;
display:block; 
font-family: 'Black Ops One', cursive;    
}
@media(min-width:768px){
position:initial;
margin:0;
margin-right:50px;
margin-top:10px;
.textLink{
font-size:1.2rem;
color:black;
display:inline;
font-family: 'Bebas Neue', cursive;  
}
}
} 
.Links.active{
width:100%;
display:block;
position:absolute;
margin-left:auto;
margin-right:auto;
top:20%;
left:0;
right:0;
text-align:center;
a{
font-size:2rem;
margin-top:1rem;
color:white;    
}
}
`
const BgDiv=styled.div`
position:absolute;
background-color:#870C0C;
left:-1500px;
width:100%;
height:100%;
z-index:-1;
transition: all .6s ease;
&.active{
border-radius:0 0 80% 0;
top:0;
left:0;
width:100%;
height:100%;
}
`