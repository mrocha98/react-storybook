import React from 'react'
import * as S from './styles'

export type ChannelMessageProps = {
  author: string
  date: string
  content: string | React.ReactElement | React.ReactNode
  hasMention?: boolean
  isBot?: boolean
}

export { Mention } from './styles'

const ChannelMessage = ({ author, date, content, hasMention, isBot }: ChannelMessageProps) => {
  return (
    <S.Container className={hasMention ? 'mention' : ''}>
      <S.Avatar className={isBot ? 'bot' : ''} />

      <S.Message>
        <S.Header>
          <strong>{author}</strong>

          {isBot && <span className="bot">Bot</span>}

          <time>{date}</time>
        </S.Header>
        <S.Content>{content}</S.Content>
      </S.Message>
    </S.Container>
  )
}

export default ChannelMessage
