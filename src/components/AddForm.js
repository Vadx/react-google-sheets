import React from 'react'
import { Button, Form, Header } from 'semantic-ui-react'

const options = [
  { key: 't', text: 'Tesla', value: 'tesla' },
  { key: 'e', text: 'E-Golg', value: 'e-golf' },
  { key: 'n', text: 'Nio', value: 'nio' },
]

const AddForm = () => (
  <>
    <Header as='h3'>Pre-order new vehicle</Header>
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <Form.Select
          fluid
          label='Vehicle'
          options={options}
          placeholder='vehicle'
        />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </>
)

export default AddForm