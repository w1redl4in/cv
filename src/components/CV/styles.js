import React from 'react'
import styled from 'styled-components'
import { Col } from 'antd'

export const Column = styled(({ ...props }) => <Col {...props} />)`
  @media (max-width: 765px) {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
`
