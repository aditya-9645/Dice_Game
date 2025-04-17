import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to Play Dice Game</h2>
        <div className="text">
            <p>1. Select any number</p>
            <p>2. Click on dice image</p>
            <p>3. After clicking on dice, if your selecyed number is equal to the number shown by dice, your score will increase by that selected number.</p>
            <p>Else, it will decrease by 2</p>
        </div>
    </RulesContainer>
  )
};

export default Rules;

const RulesContainer = styled.div`

    max-width: 60vw; 
    padding: 20px;
    border-radius: 10px; 
    background-color: #ffe2e2;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    
    h2{
        background-color: #ffe2e2;
        margin-top: 0px;
        margin-bottom: 10px;
    }
    .text{
        background-color: #ffe2e2;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
            background-color: #ffe2e2;
            margin: 0;
        }
    }

`