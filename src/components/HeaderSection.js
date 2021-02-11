import React from 'react';
import styled from 'styled-components'
import {motion} from 'framer-motion'

//External Sorces
import me from '../images/profil.jpg'
//Wave
import Wave from './Wave';
//Font Awesome
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import{faEnvelope} from '@fortawesome/free-solid-svg-icons'



const HeaderSection = () =>{
const leftAnimation = {
    hidden:{x: -100 },
    show:{ x:0,
        transition:{
            duration: 0.75 , 
            ease: 'easeOut'
        }
    }
}
const rightAnimation = {
    hidden:{x: 100 },
    show:{ x:0,
        transition:{
            duration: 0.75 , 
            ease: 'easeOut'
        }
    }
}
    return(
        <StyledHeader>
            <Wave/>
            <StyledDescription>
            <motion.h2 variants={leftAnimation} initial='hidden' animate='show'>Cześć, jestem <span>Szymon Moskwa</span></motion.h2>
            <motion.h2 variants={leftAnimation} initial='hidden' animate='show'>  <span>Front-end</span> developer</motion.h2>
            <motion.p variants={leftAnimation} initial='hidden' animate='show'>Dziękuję że odwiedziłeś moją strone. Zapraszam do kontaktu</motion.p>
            <motion.div variants={leftAnimation} initial='hidden' animate='show'>
            <FontAwesomeIcon icon={faEnvelope} size='3x'/>
            <FontAwesomeIcon icon={faGithub} size='3x'/>
            </motion.div>
            

            </StyledDescription>
            <StyledImage variants={rightAnimation} initial='hidden' animate='show'>
                <img src={me} alt='Szymon Moskwa'/>
            </StyledImage>
            
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
min-height:100vh;
background-color: #242424;
display: flex;
align-items:center;
justify-content:space-evenly;
`

const StyledDescription = styled.div`
width:50%;
height:100%;
padding:6rem 6rem 6rem 10rem;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:space-evenly;
color:white;

h2{
    font-size:40px;
    margin-bottom:20px;
    z-index:3;
}
span{
    font-size:45px;
    color:#38afdf;
}
p{
    font-size:20px;
    margin-bottom:20px;
    z-index:3;
    
}
div{
    display:flex;
    align-items:center;
   

}
svg{
margin-right:20px;
z-index:10;    

}
`
const StyledImage = styled(motion.div)`
width:50%;
display: flex;
overflow:hidden;
align-items:center;
justify-content:center;

img{
 height:80vh;
    width:60%;
    object-fit:cover;
   padding:20px;
   z-index:3;
}
`
export default HeaderSection