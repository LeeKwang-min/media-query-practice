import React from "react";
import styled from "styled-components";
import Header from './header';
import Main from './mainSection';
import Side from './sideSection';

const MainSide = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;

    @media screen and (max-width: 1023px){
        flex-direction: column;   
    }
`;

const SideTwo = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;

    @media screen and (max-width: 1023px){
        flex-direction: row; 
        width: 100%;  
    }
`;

const Page = () => {
    return (
        <>
            <Header />
            <MainSide>
                <Main />
                <SideTwo>
                    <Side />
                    <Side />
                </SideTwo>
            </MainSide>
        </>
    )
}

export default Page;