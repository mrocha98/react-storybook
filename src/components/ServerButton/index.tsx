import React from 'react'
import * as S from './styles'
import Logo from '../../assets/images/discord-logo.png'

export type ServerButtonProps = {
  selected?: boolean
  isHome?: boolean
  hasNotifications?: boolean
  mentions?: number
}

const ServerButton = ({ selected, hasNotifications, isHome, mentions }: ServerButtonProps) => {
  return (
    <S.Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={Logo} alt='GSW Logo' />}
    </S.Button>
  )
}

export default ServerButton
