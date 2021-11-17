import styled from '@emotion/styled';
import React, { Fragment, useState } from 'react';

const Label=styled.label`
    font-family: 'Bebas Neue',cursive;
    color:#fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select=styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance:none;
    border-radius: 10px;
    border:none;

`;

const useCripto= (label,stateInicial,options) => {
    
    const [state, setState] = useState(stateInicial);

    const SelectCripto=()=>(
        <Fragment>
            <Label>{label}: </Label>
            <Select
                onChange={e=>setState(e.target.value)}
                value={state}
            >
                <option value="">Seleccione una opción</option>
                {options.map( option=> (

                    <option value={option.CoinInfo.Name} key={option.CoinInfo.Id}>{option.CoinInfo.FullName}</option>

                ))}
            </Select>

        </Fragment>
    );
    
    return[state,SelectCripto,setState];
}

 
export default useCripto;