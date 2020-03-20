import React from 'react';
import styled from "styled-components";


const Container = styled.div`
   margin: 0 auto;
   width: 40%;
   border-right: 2px #FFE81F solid;
   border-top: 2px #FFE81F solid;
   border-bottom: 2px black solid;
   border-left: 2px black solid;
   margin-top: 2%;
`;

const Titler = styled.h2`
    font-family: 'Fira Sans', sans-serif;
    color: Yellow;
    text-shadow: 2px 2px black;
`;

const MainPage = props => {
    return (
        <Container>
            <Titler>{props.name}</Titler>
            {/* <img src={props.url} alt='starwars characters'></img>
            
            <p>{props.birthYear}</p>
            <img src={props.homeworld} alt='homeworlds'/> */}
            
        </Container>

    )




}

export default MainPage;