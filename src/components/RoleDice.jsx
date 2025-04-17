import { useState } from "react"
import styled from "styled-components"

const RoleDice = ({currentDice, roleDice}) => {
    
    return (
        <Container>
            <div className="dice_section" onClick={roleDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice_image_to_be_clicked" />
            </div>
            <p>Click Dice to Roll</p>
            
        </Container>
        
    )
}

export default RoleDice

const Container = styled.div`
    color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .dice_section{
        cursor: pointer;
        img{
            width: 250px;
            height: auto;
        }
    }
    p{
        margin: 0px;
        font-size: 20px;
    }
`

