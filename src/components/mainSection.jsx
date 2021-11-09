import React from "react";
import styled from "styled-components";

const MainSection = styled.div`
    width: calc(1200px * 0.7);
    height: 100%;
    border: 1px solid red;
    background: green;
    margin-right: 20px;

    @media screen and (max-width: 1200px){
        background: blue;
        width: 70%;
    }

    @media screen and (max-width: 1023px){
        background: brown;
        width: 100%;
        margin: 0px;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 766px){
        background: red;
        width: 100%;
    }

    @media screen and (max-width: 374px){
        background: black;
    }
`;

const Main = () => {
    return (
        <MainSection>hello</MainSection>
    )
}

export default Main;