import React from 'react'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import ServerList from '../ServerList'
import ServerName from '../ServerName'

import * as S from './styles'

const Layout = () => {
  return (
    <S.Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
    </S.Grid>
  )
}

export default Layout
