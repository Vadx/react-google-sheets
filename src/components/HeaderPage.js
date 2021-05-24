import React from 'react'
import { Container, Menu } from 'semantic-ui-react'

const HeaderPage = () => (
  <Menu inverted>
    <Container>
      <Menu.Item as='a'>React + GoogleSheets</Menu.Item>
      <Menu.Item as='a'>Form</Menu.Item>
      <Menu.Item as='a'>Table</Menu.Item>
    </Container>
  </Menu>
)

export default HeaderPage