import React from 'react'
import * as S from './styles'

export type ChannelMessageProps = {
  author: string
  date: string
  content: string | React.ReactElement | React.ReactNode
  hasMention?: boolean
  isBot?: boolean
}

const ChannelMessage = ({ isBot }: ChannelMessageProps) => {
  return (
    <S.Container>
      <S.Avatar />

      <S.Message>
        <S.Header>
          <strong>Guilherme Rodz</strong>

          {isBot && <span>Bot</span>}
        </S.Header>
        <S.Content>@Zap</S.Content>
      </S.Message>
    </S.Container>
  )
}

export default ChannelMessage
