import styled from '@emotion/styled';
import React from 'react';
const DivFrase=styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top: 10rem;

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 2rem;

        &::before{
            content: open-quote;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif ;
        font-weight:bold;
        font-size: 1.6rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;
const Frase = ({frase}) => {
    return (
        <DivFrase>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </DivFrase>
    );
}
 
export default Frase;