import styled from '@emotion/styled';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Cotizacion from './components/Cotizacion';
import Form from './components/Form';
import Spinner from './components/Spinner';
import imagen from './crip.jpeg'

const Contenedor=styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`;
const Imagen=styled.img`
  max-width: 90%;
  margin-top: 5rem;
`;
const Heading=styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #22DF6A;
    display: block;
  }
`;
function App() {
  const [currency, setCurrency] = useState('');
  const [cripto, setCripto] = useState('');
  const [result, setResult] = useState({});
  const [load, setLoad] = useState(false)
  useEffect(() => {

      const criptoQuoter = async () => {
        if(currency==='')return;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${currency}`;
        const result= await axios.get(url);
        setLoad(true);

        setTimeout(() => {
          setLoad(false);
          setResult(result.data.DISPLAY[cripto][currency]);  
        }, 3000);
        
      }
      criptoQuoter();
  }, [currency,cripto]);
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Cryto imagen"/>
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Form
          setCurrency={setCurrency}
          setCripto={setCripto}
        />
        {(load)?<Spinner/>:<Cotizacion  result={result} />}
        
      </div>
    </Contenedor>
  );
}

export default App;
