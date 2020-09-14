import React from 'react'
import ChannelButton from '../ChannelButton'
import * as S from './styles'

const ChannelList = () => {
  return (
    <S.Container>
      <S.Category>
        <span>Canais de texto</span>
        <S.AddCategoryIcon />
      </S.Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="civilization" />
      <ChannelButton channelName="csgo" />
    </S.Container>
  )
}

export default ChannelList
