import styled from "styled-components"
import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import { useState } from "react"
import { Button, OutLineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [isSelectedNumber, setIsSelectedNumber] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState(false);
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max ) => {
        return Math.floor(Math.random() * (max-min) + min);
    };

    const roleDice = () => {
        if(isSelectedNumber == 0){
            setError(true);
        }else{
            
            const randomNumber = generateRandomNumber(1,7);
            setCurrentDice(() => randomNumber);
            if(isSelectedNumber == randomNumber){
                setScore(prevScore => prevScore + randomNumber);
            }else{
                setScore(prevScore => prevScore - 2);
            }
            setIsSelectedNumber(() => 0);
        }
    };

    const resetScore = () => {
        setIsSelectedNumber(0);
        setScore(0);
    };

    const ruleShow = () => {
        setShowRules(!showRules);
    }

    return (
        <MainContainer>
            <Container>
                <TotalScore score={score} />
                <NumberSelector isSelectedNumber={isSelectedNumber} setIsSelectedNumber={setIsSelectedNumber} error={error} setError={setError}/>
            </Container>
            <RoleDice currentDice={currentDice} roleDice={roleDice}/>
            <div className="btns">
                <OutLineButton onClick={resetScore}>Reset Score</OutLineButton>
                <Button onClick={ruleShow}>{(showRules) ? "Hide Rules" : "Show Rules"}</Button>
            </div>
            {(showRules)? <Rules/>: ""}
        </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.div`
    color: white;
    .btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;
        gap: 14px;
    }
`

const Container = styled.div`
    
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    margin-left: 150px;
    
    margin-right: 100px;

`