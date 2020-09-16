import React from 'react'
import * as S from './styles'

export type ChannelInfoProps = {
  title: string
  description?: string
}

const ChannelInfo = ({ title, description }: ChannelInfoProps) => {
  return (
    <S.Container>
      <S.HashtagIcon />

      <S.Title>{title}</S.Title>

      <S.Separator />

      <S.Description>{description}</S.Description>
    </S.Container>
  )
}

export default ChannelInfo
