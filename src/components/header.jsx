import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
    width: 100%;
    background-color: orange;
    border: 1px solid red;
    height: 100px;

    @media screen and (max-width: 1199px){
        
    }

    @media screen and (max-width: 1023px){
        height: 200px;
    }

    @media screen and (max-width: 766px){
        
    }

    @media screen and (max-width: 374px){
        
    }
`;

const Header = () => {
    return (
        <HeaderBox>Header</HeaderBox>
    )
}

export default Header;