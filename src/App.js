import { Container } from 'semantic-ui-react'
import AddForm from './components/AddForm'
import HeaderPage from './components/HeaderPage'

function App() {
  return (
    <>
      <HeaderPage />
      <Container>
        <AddForm />
      </Container>
    </>
  )
}

export default App
