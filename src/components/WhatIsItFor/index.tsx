import { Container } from '../Global.styled'
import { LeftDiv, MainDiv, RightDiv, Separator, TextW, TextWrapper, Title, WhatIsItForWrapper } from './styled'
import json from './texts.json'
const WhatIsItFor = () => {
  return (
    <WhatIsItForWrapper>
      <Container>
      <MainDiv>
      <LeftDiv>
        <TextWrapper>
          <Title>{json.title}</Title>
          <TextW>{json.text}</TextW>
          <Separator />
          <Title>{json.title2}</Title>
          <TextW>{json.text2}</TextW>
        </TextWrapper>
      </LeftDiv>
      <RightDiv></RightDiv>
    </MainDiv>
      </Container>
    </WhatIsItForWrapper>
  )
}

export default WhatIsItFor
