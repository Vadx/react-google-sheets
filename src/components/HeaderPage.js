import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HeaderPage = () => (
  <Menu inverted>
    <Container>
      <Menu.Item>
        <Link to='/'>
          React + GoogleSheets
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/'>
          Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/form'>
          Form
        </Link>
      </Menu.Item>
    </Container>
  </Menu>
)

export default HeaderPage