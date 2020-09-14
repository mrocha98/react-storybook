import React from 'react'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import ServerList from '../ServerList'
import ServerName from '../ServerName'
import UserInfo from '../UserInfo'

import * as S from './styles'

const Layout = () => {
  return (
    <S.Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
    </S.Grid>
  )
}

export default Layout
