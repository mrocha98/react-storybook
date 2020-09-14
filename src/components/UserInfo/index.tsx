import React from 'react'

import * as S from './styles'

const UserInfo = () => {
  return (
    <S.Container>
      <S.Profile>
        <S.Avatar />
        <S.UserData>
          <strong>m̵͙̣͗̄͛̈́e̵̢̗̣̅̓ṅ̸̟̻̱͓͝d̸̡͖̈̇ͅĭ̵̪̈́g̴͚͓͑̑o̶͌ͅ</strong>
          <span>#2689</span>
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
