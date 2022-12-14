import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
// import Logo from '../../assets/logo-white.png'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const UniIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <UniIcon id="link" onClick={() => history.push('/')}>
            <div style={{ display: 'flex' }}>
              <img width={'25px'} src="/images/logo.svg" alt="logo" />
              <img width={'125px'} src="/images/wordmark_white.svg" alt="logo" />
            </div>
            {/* <img width={'150px'} src={Logo} alt="logo" /> */}
          </UniIcon>
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
