import React from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCripto from '../hooks/UseCrypto';
import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';
import Error from './Error';

const Button=styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #22DF6A;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #92efb5;
        cursor: pointer;
    }
`;
const Form = ({setCurrency,setCripto}) => {
    const [criptoOptions, setCriptoOptions] = useState([]);
    const [error, setError] = useState(false);
    const MONEDAS=[
        {codigo:'USD',nombre:'Dolar de Estados Unidos'},
        {codigo:'MXN',nombre:'Peso Mexicano'},
        {codigo:'EUR',nombre:'Euro'},
        {codigo:'GBP',nombre:'Libra Esterlina'}
    ];
    const [currency,SelectCurrency]=useCurrency('Elige tu moneda','',MONEDAS);
    const [cripto,SelectCripto]=useCripto('Elije tu criptomoneda','',criptoOptions);

    useEffect(() => {
        const consultarAPI=async()=>{
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const resultado= await axios.get(url);
            setCriptoOptions(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    const currencyQuoter=e=>{
        e.preventDefault();

        if(currency ==='' || cripto ===''){
            setError(true);
            return;
        }
        setError(false);
        setCripto(cripto);
        setCurrency(currency)

    }
    return (
        <form
            onSubmit={currencyQuoter}
        >
            {error?<Error mensaje='Hay un error'/>:null}
            <SelectCurrency/>
            <SelectCripto/>
            <Button type="submit" value="Calcular"/>
        </form>
    );
}
 
export default Form;