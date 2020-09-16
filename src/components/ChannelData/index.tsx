import React from 'react'

import * as S from './styles'

const ChannelData = () => {
  return (
    <S.Container>
      <S.Messages />

      <S.InputWrapper>
        <S.Input type="text" placeholder="Conversar em #chat-livre" />
        <S.InputIcon />
      </S.InputWrapper>
    </S.Container>
  )
}

export default ChannelData
