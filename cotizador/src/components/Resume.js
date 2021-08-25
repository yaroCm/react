import React from 'react';
import styled from "@emotion/styled";

const DivResume=styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`;

const Resume = ({data}) => {
    const {brand,year,plan} =data;

    if(brand==='' || year===''|| plan==='') return null;
    return ( 
        <DivResume>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Brand: {brand}</li>
                <li>Year: {year}</li>
                <li>Plan: {plan}</li>
            </ul>
        </DivResume>
    );
}
 
export default Resume;