import { useState } from "react";
import styled from "styled-components"


const NumberSelector = ({isSelectedNumber, setIsSelectedNumber, error, setError}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    
    const numberSelectorHandler = (value) => {
        setIsSelectedNumber(value);
        setError(false);
    };

    return (
        <NumberSelectorContainer>
            <p className="error">{error ? "You have not selected any number!":""}</p>
        <Container>
            {arrNumber.map((value,i) => (
                <Box 
                isselected = {value == isSelectedNumber}
                key={i} 
                onClick={() => numberSelectorHandler(value)}
                >
                    {value}
                </Box>))
            }
        </Container>
        <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    p{  
        font-size: 20px;
        align-self: flex-end ;
    }
    .error{
        color: red;
    }
`


const Container = styled.div`
    max-width: 32vw;
    display: flex;
    gap:32px;
    
`

const Box = styled.div`
    align-self: center;
    width: 72px;
    height: 72px;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 25px;
    font-weight: 400;
    display: grid;
    place-items: center;
    cursor: pointer;    
    background-color: ${(props) => (props.isselected) ? "white" : "black"};
    color: ${(props) => (props.isselected) ? "black" : "white"};
`