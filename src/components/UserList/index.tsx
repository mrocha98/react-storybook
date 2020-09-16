import React from 'react'
import faker from 'faker/locale/pt_BR'
import UserRow from '../UserRow'
import * as S from './styles'

const UserList = () => {
  const users = Array.from(({ length: 20 }), () => ({
    id: faker.random.uuid(),
    nickname: `${faker.name.firstName()} ${faker.name.lastName()}` ,
    isBot: faker.random.boolean()
  }))

  return (
    <S.Container>
      <S.Role>Disponível - 1</S.Role>
      <UserRow nickname="m̵͙̣͗̄͛̈́e̵̢̗̣̅̓ṅ̸̟̻̱͓͝d̸̡͖̈̇ͅĭ̵̪̈́g̴͚͓͑̑o̶͌ͅ" />

      <S.Role>Offline - 18</S.Role>
      {
        users.map(({ id, nickname, isBot }) => <UserRow key={id} nickname={nickname} isBot={isBot} />)
      }
    </S.Container>
  )
}

export default UserList
