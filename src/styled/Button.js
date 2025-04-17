import styled from "styled-components"

export const Button = styled.button`
    background-color: #000000; 
    color: white;
    min-width: 210px;
    font-weight: 600;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    border: 1px solid white;

    cursor: pointer;
    &:hover{
        color: #ffffff;
        background-color: #252525;
    }

    &:active {
        transform: scale(0.97); 
        background-color: #ffffff;
        color: #000000;
        border: 1px solid white;
    }
`

export const OutLineButton = styled(Button)`
    background-color:rgb(255, 255, 255); 
    color: black;
    font-weight: 600;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    border: 1px solid white;

    cursor: pointer;
    &:hover{
        color:rgb(0, 0, 0);
        background-color:rgb(194, 194, 194);
    }

    &:active {
        transform: scale(0.97); 
        background-color:rgb(0, 0, 0);
        color:rgb(255, 255, 255);
        border: 1px solid white;
    }
`