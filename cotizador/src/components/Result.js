import styled from '@emotion/styled';
import React from 'react';
import { TransitionGroup,CSSTransition } from 'react-transition-group';

const Message=styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;
const DivCost=styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color:rgb(127,224,237);
    margin-top: 1rem;
    position: relative;

`;
const TitleCost=styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({quote}) => {
    if(quote===0) {
        return(
            <Message>Ingresa la marca el año y el plan</Message>
        );
    }else{
        return (
            <DivCost>
                <TransitionGroup
                    component="p"
                    className="resultado">
                    <CSSTransition
                        classNames="resultado"
                        key={quote}
                        timeout={{enter:500, exit:500}}>
                        <TitleCost>${quote}</TitleCost>
                    </CSSTransition>
                </TransitionGroup>
                
            </DivCost>
        );
    }
}
 
export default Result;