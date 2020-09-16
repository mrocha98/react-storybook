import React from 'react'
import ChannelData from '../ChannelData'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import ServerList from '../ServerList'
import ServerName from '../ServerName'
import UserInfo from '../UserInfo'
import UserList from '../UserList'

import * as S from './styles'

const Layout = () => {
  return (
    <S.Grid>
      <ServerList />
      <ServerName title="Servidor do m̵͙̣͗̄͛̈́e̵̢̗̣̅̓ṅ̸̟̻̱͓͝d̸̡͖̈̇ͅĭ̵̪̈́g̴͚͓͑̑o̶͌ͅ" />
      <ChannelInfo title="chat-livre" description="geralzão" />
      <ChannelList />
      <UserInfo name="m̵͙̣͗̄͛̈́e̵̢̗̣̅̓ṅ̸̟̻̱͓͝d̸̡͖̈̇ͅĭ̵̪̈́g̴͚͓͑̑o̶͌ͅ" tag="#2689" />
      <ChannelData />
      <UserList />
    </S.Grid>
  )
}

export default Layout
