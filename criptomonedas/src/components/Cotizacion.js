import styled from '@emotion/styled';
import React from 'react';

const ResultDiv=styled.div`
    color: #fff;
`;
const ResultP=styled.p`
    font-size: 18px;
    span{
        font-weight: bold;
    }
`;
const ResultPrice=styled.p`
    font-size: 30px;
`;
const Cotizacion = ({result}) => {

    if(Object.keys(result).length===0) return null;
    return(
        <ResultDiv>
            <ResultPrice>El precio es <span>{result.PRICE}</span></ResultPrice>
            <ResultP>El precio mas alto del día <span>{result.HIGHDAY}</span></ResultP>
            <ResultP>El precio mas bajo del día <span>{result.LOWDAY}</span></ResultP>
            <ResultP>Variación en las últimas 24 hrs <span>{result.CHANGEPCT24HOUR}</span></ResultP>
            <ResultP>Ultima actualización<span>{result.LASTUPDATE}</span></ResultP>
        </ResultDiv>
    );
}
 
export default Cotizacion;