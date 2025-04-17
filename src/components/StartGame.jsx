import { Button } from "../styled/Button"
import styled from "styled-components"

const StartGame = ({toggle}) => {


    return (
        <Container>
            <img src="./images/dices_main.png" alt="dices_image" className="dices_image"/>
            <div className="content">
                <h1>DICE GAME</h1>
                <Button className="button_at_end" onClick={toggle}>Play Now</Button>
            </div>

        </Container>
    )
}

export default StartGame


const Container = styled.div`
    margin-top: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .dices_image{
        height: 60vh;
        width: auto;
    }

    .content{
        font-size: 56px;
        display: flex;
        flex-direction: column;
        
        h1{
            margin: 0;
            color: white;
            white-space: nowrap;
        }
        .button_at_end{
            min-width: 220px;
            max-width: 220px;
            align-self: flex-end;
        }
        
    }
`
