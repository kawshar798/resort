import React from 'react';
import styled from "styled-components";
import {setRem} from "../style";


const Container = ({children}) => {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    );
};

const  ContainerWrapper = styled.div`
width:${setRem(1170)};
margin:0 auto;

`;
export default Container;