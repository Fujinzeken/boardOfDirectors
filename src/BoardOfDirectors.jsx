import React from 'react'
import { Container, DivContainer } from './styles/Container.styles'
// import arrow from './images/Ellipse 52 (1).svg'
import { Info, Name, Title, Wrapper } from './styles/Wrapper.styles'
import infoIcon from './images/infoIcon.svg'
import { Arrow } from './styles/Arrow.styles'
import content from './content'
import {Link} from 'react-router-dom'



const BoardOfDirectors = () => {
  return (
    <Container>
        <DivContainer>
            <h1>Board of Directors</h1>
            <p>Meet our board of directors 
            that has helped our company supervise and control the management and operation of the company</p>
        </DivContainer>
        <Wrapper>
            {content.map((item)=>(
              <div key={item.id}>
                <img src={item.image} alt=''/>
                <Name>{item.name}</Name>
                <Title>{item.title}</Title>
                <Info>
                <Link to='/details/:id'><Arrow src={infoIcon} alt='' /></Link>
                </Info>
              </div>
            ))}
        </Wrapper>
    </Container>
  )
 
}

export default BoardOfDirectors
