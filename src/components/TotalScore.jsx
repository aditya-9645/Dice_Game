import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
    <Container>
        <h1>{score}</h1>
        <p>Total Score</p>
    </Container>
  )
}

export default TotalScore

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 8vw;
    
    
    h1{
        font-size: 100px;
        font-weight: 600;
        line-height: 85px;
        margin: 15px 0px;
    }
    p{
        font-size: 20px;
        margin: 0;
    }
    color: white;
`