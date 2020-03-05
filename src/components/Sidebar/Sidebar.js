import React from 'react'
import { Layout, Divider } from 'antd'
import Author from './Author'
import Contacts from './Contacts'
import Menu from './Menu'
import Categories from './Categories'
import Tags from './Tags'
import { useSiteMetadata } from '../../hooks'

const { Sider } = Layout

const Sidebar = ({ hideMobile }) => {
  const { author, menu } = useSiteMetadata()

  return (
    <Sider
      style={{ background: '#282A36' }}
      className={`text-white no-print ${hideMobile && 'hide-mobile'}`}
    >
      <Author author={author} />
      <Contacts contacts={author.contacts} />
      <Divider className="sidebar-divider" />
      {/* <Menu menu={menu} /> */}
      {/* <div className="hide-mobile">
        <Categories />
        <Tags />
      </div> */}
    </Sider>
  )
}

export default Sidebar
