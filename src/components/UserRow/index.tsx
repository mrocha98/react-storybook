import React from 'react'
import * as S from './styles'

export type UserRowProps = {
  nickname: string
  isBot?: boolean
}

const UserRow = ({ nickname, isBot }: UserRowProps) => {
  return (
    <S.User>
      <S.Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </S.User>
  )
}

export default UserRow
