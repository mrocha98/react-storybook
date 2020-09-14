import React from 'react'
import * as S from './styles'

export type ChannelButtonProps = {
  channelName?: string
  selected?: boolean
}

const ChannelButton = ({ channelName, selected }: ChannelButtonProps) => {
  return (
    <S.Container className={selected ? 'active' : ''}>
      <div>
        <S.HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <S.InviteIcon />
        <S.SettingsIcon />
      </div>
    </S.Container>
  )
}

export default ChannelButton
