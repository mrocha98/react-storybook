import React from 'react'
import faker from 'faker/locale/pt_BR'
import ServerButton from '../ServerButton'
import * as S from './styles'

const ServerList = () => {
  const servers = Array.from(({ length: 20 }), () => ({
    id: faker.random.uuid(),
    hasNotifications: faker.random.boolean(),
    mentions: Math.floor(Math.random() * 11)
  }))

  return (
    <S.Container>
      <ServerButton isHome />

      <S.Separator />

      {
        servers.map(({ id, hasNotifications, mentions }) => (
          <ServerButton key={id} hasNotifications={hasNotifications} mentions={mentions} />
        ))
      }
    </S.Container>
  )
}

export default ServerList
