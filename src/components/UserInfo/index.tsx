import React from 'react'
import * as S from './styles'

export type UserInfoProps = {
  name: string
  tag: string
}

const UserInfo = ({ name, tag }: UserInfoProps) => {
  return (
    <S.Container>
      <S.Profile>
        <S.Avatar />
        <S.UserData>
          <strong>{name}</strong>
          <span>{tag}</span>
        </S.UserData>
      </S.Profile>

      <S.Icons>
        <S.MicIcon />
        <S.HeadphoneIcon />
        <S.SettingsIcon />
      </S.Icons>
    </S.Container>
  )
}

export default UserInfo
