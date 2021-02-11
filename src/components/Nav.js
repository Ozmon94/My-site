import styled from 'styled-components'


const Nav = () =>{

    return(
        <StyledNavbar>
                <a className="logo" href='#'>Szymon Moskwa</a>
                <ul>
                    <li><a href="#">Strona główna</a></li>
                    <li><a href="#">Projekty w JS</a></li>
                    <li><a href="#">Projecty w React</a></li>
                    <li><a href="#">Kontakt</a></li>
                    
                </ul>
           
        </StyledNavbar>
    )
}
const StyledNavbar = styled.nav`
    max-height:80px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color: rgba(0,0,0,0.75);
    position:sticky;
    top:0;
    z-index:999;
    padding:1rem 10rem;
.logo{
    font-size:26px;
    padding:0rem 1rem;
    font-family:'lobster', cursive;
    color:#38afdf;
}

 ul{
     display: flex;
     list-style:none;
 }
 a{
     display: block;
     padding:0.5rem 1rem;
     color:white;
    text-decoration:none;     
    cursor: pointer;
    transition:all 0.5s ease;
 }
 a:hover{
     color:#38afdf;
 }


    `

export default Nav