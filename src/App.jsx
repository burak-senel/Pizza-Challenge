
import { Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default App
