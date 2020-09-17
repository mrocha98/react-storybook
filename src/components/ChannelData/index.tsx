import React, { useRef, useEffect } from 'react'
import faker from 'faker/locale/pt_BR'
import ChannelMessage, { Mention } from '../ChannelMessage'
import * as S from './styles'

const ChannelData = () => {
  const messages = Array.from(({ length: 20 }), () => ({
    id: faker.random.uuid(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    date: faker.date.recent().toLocaleDateString(),
    content: faker.random.words(5),
    isBot: faker.random.boolean()
  }))

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) div.scrollTop = div.scrollHeight
  }, [messagesRef])

  return (
    <S.Container>
      <S.Messages ref={messagesRef}>
        {
          messages.map(({ id, author, date, content, isBot }) => (
            <ChannelMessage
              key={id}
              author={author}
              date={date}
              content={content}
              isBot={isBot}
            />
          ))
        }
        <ChannelMessage
          author="Diego Fernandes"
          date="06/21/2020"
          isBot
          content={
            <>
              <Mention>@Guilherme Rodz</Mention>, me carrega no LoL e no CS de novo, por favor?
            </>
          }
        />
      </S.Messages>

      <S.InputWrapper>
        <S.Input type="text" placeholder="Conversar em #chat-livre" />
        <S.InputIcon />
      </S.InputWrapper>
    </S.Container>
  )
}

export default ChannelData
