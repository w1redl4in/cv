import React from 'react'
import { Layout, Divider, Row, Typography } from 'antd'
import Author from './Author'
import Contacts from './Contacts'
import Menu from './Menu'
import Categories from './Categories'
import Tags from './Tags'
import { useSiteMetadata } from '../../hooks'
import Lottie from 'react-lottie'
import animationData from './dead.json'

const { Sider } = Layout

const Sidebar = ({ hideMobile }) => {
  const { author, menu } = useSiteMetadata()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Sider
      style={{ background: '#282A36' }}
      className={`text-white no-print ${hideMobile && 'hide-mobile'}`}
    >
      <Author author={author} />
      <Contacts contacts={author.contacts} />
      <Divider className="sidebar-divider" />
      <Row align="middle" justify="center">
        <Typography.Paragraph
          type="secondary"
          style={{ color: 'white', fontStyle: 'italic', marginLeft: '25px' }}
        >
          A day without studying is another day between you and your goal
        </Typography.Paragraph>
        <Divider style={{ height: '0' }} />
        <Lottie
          options={defaultOptions}
          width={200}
          height={200}
          isClickToPauseDisabled
        />
      </Row>
    </Sider>
  )
}

export default Sidebar
