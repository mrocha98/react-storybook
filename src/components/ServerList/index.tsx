import React from 'react'
import ServerButton from '../ServerButton'

import * as S from './styles'

const ServerList = () => {
  return (
    <S.Container>
      <ServerButton isHome />

      <S.Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={5} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications mentions={10} />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={3} />
      <ServerButton />
    </S.Container>
  )
}

export default ServerList
