import styled from '@emotion/styled';
import React from 'react';


const ErrorMessage= styled.p`
 background-color: #b7322c;
 padding: 1rem;
 color: #fff;
 font-size: 30px;
 text-transform: uppercase;
 font-weight: bold;
 text-align: center;
 font-family: 'Bebas Neue',cursive;
`;

const Error = ({mensaje}) => {
    return (  
        <ErrorMessage>{mensaje}</ErrorMessage>

    );
}
 
export default Error;