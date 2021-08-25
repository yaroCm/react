import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { calculateBrand, diferenceOfYear, obtainPlan } from '../Helper';

const DivForm=styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const LabelForm=styled.label`
    flex: 0 0 100px;
`;

const SelectForm=styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadioForm=styled.input`
    margin: 0 1rem;
`;

const ButtonForm=styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        cursor: pointer;
        background-color: #26C6DA;
    }

`;
const Error=styled.div`
    background-color: red;
    color:white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;

`;
const Form = ({setResume, setCharge}) => {
    const [data, setData] = useState({
        brand:'',
        plan:'',
        year:''
    });
    const [error, setError] = useState(false);
    const {brand,plan,year} = data;

    const getInformation=e=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    };

    const quote=e=>{
        e.preventDefault();
        if(brand.trim()===''||year.trim===''||plan.trim===''){
            setError(true);
            return;
        }
        setError(false);
        
        let cost = 2000;
        
        const diference=diferenceOfYear(year);

        cost-=((diference* 3) * cost )/100;
        

        cost*=calculateBrand(brand);
        console.log(cost);

        cost*=obtainPlan(plan);

        setCharge(true);

        setTimeout(()=>{
            setCharge(false);
            setResume({
                quote: cost,
                data
            });

        },3000);
        

    };
    return (  
        <form
            onSubmit={quote}>
            {error?<Error>Todos los campos son obligatorios</Error>:''}
            <DivForm>
                <LabelForm>Marca:</LabelForm>
                <SelectForm 
                    name="brand" 
                    value={brand}
                    onChange={getInformation}
                    >
                   <option value="">Seleccione</option> 
                   <option value="americano">Americano</option> 
                   <option value="europeo">Europeo</option> 
                   <option value="asiatico">Asiatico</option> 
                </SelectForm>
            </DivForm>
            <DivForm>
                <LabelForm>Año:</LabelForm>
                <SelectForm 
                    name="year" 
                    value={year}
                    onChange={getInformation}>
                    <option value="">Seleccione</option> 
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option> 
                </SelectForm>
            </DivForm>
            <DivForm>
                <LabelForm>Plan:</LabelForm>
                <InputRadioForm 
                    type="radio" 
                    name="plan" 
                    value="basico"
                    checked={plan==='basico'}
                    onChange={getInformation}/> Básico 
                <InputRadioForm 
                    type="radio" 
                    name="plan" 
                    value="completo"
                    checked={plan==='completo'}
                    onChange={getInformation}/> Completo 
            </DivForm>
            <ButtonForm type="submit">Cotizar</ButtonForm>
        </form>
    );
}
 
export default Form;