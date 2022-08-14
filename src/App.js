import './App.css'
import { HomeLayout } from '../src/layout/HomeLayout'
import { RouterConfig } from '../src/router/RouterConfig'

function App() {
  return (
    <RouterConfig>
      <HomeLayout />
    </RouterConfig>
  )
}

export default App
