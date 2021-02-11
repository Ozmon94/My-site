import React from'react';
import  styled  from 'styled-components'
import {motion} from 'framer-motion'


const AboutSection = () =>{

return(
    <StyledAbout>
        <StyledDescription>
        <h4>Kim jestem ??</h4>
 <p> Na imię mam Szymon. Mieszkam w Lublinie. Jestem młodym pełnym zapału programistą na poczatku drogi zawodowej.  Swoją przygodę z programowaniem zacząłem w grudniu 2019 roku. Programowanie stało się moją pasją, którą codzinnie rozwijam. </p>
 {/* <p>Do tej pory moja przygoda z programowaniem wiązała się z nauką H</p> */}
 <p>Moim celem życiowym jest zdobycie pracy na stanowisku Junior Front-end Developera, oraz dalszy rozwój i poszerzanie zwojego stacka technologicznego</p>
 </StyledDescription>
    </StyledAbout>
)



}

const StyledAbout=styled.div`
min-height:60vh;
color:white;
display: flex;
`

const StyledDescription = styled.div`
height:100%;
padding:6rem 6rem 6rem 10rem;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:space-evenly;
color:white;
`

export default AboutSection