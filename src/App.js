import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import AddForm from './components/AddForm'
import HeaderPage from './components/HeaderPage'
import ListApp from './components/ListApp'

function App() {
  return (
    <BrowserRouter>
      <HeaderPage />
      <Container>
        <Switch>
          <Route path={'/'} exact>
            <ListApp />
          </Route>
          <Route path={'/form'} exact>
            <AddForm />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
