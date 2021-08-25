import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader=styled.header`
    background-color: #26c6DA;
    padding: 10px;
    font-weight: bold;
    color: #fff;
`;
const TittleHeader=styled.h1`
    font-size:  2em;
    margin: 0;
    font-family: 'Slabo 27px',serif;
    text-align: center;
`;
const Header = ({tittle}) => {
    return (  
        <ContenedorHeader>
            <TittleHeader>{tittle}</TittleHeader>
        </ContenedorHeader>
    );
}
 
export default Header;