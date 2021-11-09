import React from "react";
import styled from "styled-components";

const SideSection = styled.div`
    width: calc(1200px * 0.3);
    height: 40%;
    border: 1px solid red;
    background: yellow;

    @media screen and (max-width: 1023px){
        width: 50%;
    }

    @media screen and (max-width: 766px){
        
    }

    @media screen and (max-width: 374px){
        
    }
`;

const Side = () => {
    return (
        <SideSection>hello</SideSection>
    )
}

export default Side;