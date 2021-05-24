import React from 'react'
import { useForm } from "react-hook-form";
import { Button, Form, Header } from 'semantic-ui-react'

const AddForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm()
  const onSubmit = data => {
    // data.preventDefault();
    console.log(data);
  }
  return (
    <>
      <Header as='h3'>Pre-order new vehicle</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' {...register("firstName", { required: true })} />
          {errors.firstName?.type === 'required' && "First name is required"}
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' {...register("lastName", { required: true })} />
          {errors.lastName && "Last name is required"}
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' type='email' {...register("email", { required: true })} />
          {errors.email && "Email is required"}
        </Form.Field>
        <Form.Field>
          <Form.Select
            fluid
            label='Vehicle'
            options = {[
              { key: 't', text: 'Tesla', value: 'tesla' },
              { key: 'e', text: 'E-Golf', value: 'e-golf' },
              { key: 'n', text: 'Nio', value: 'nio' },
            ]}
            placeholder='vehicle'
            // {...register("vehicle", { required: true })}
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}

export default AddForm