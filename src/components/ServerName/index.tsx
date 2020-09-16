import React from 'react'
import * as S from './styles'

export type ServerNameProps = {
  title: string
}

const ServerName = ({ title }: ServerNameProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.ExpandIcon />
    </S.Container>
  )
}

export default ServerName
