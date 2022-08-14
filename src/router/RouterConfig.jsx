import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Characters } from '../pages/Characters/Characters'
import { Episodes } from '../pages/Episodes/Episodes'
import { Locations } from '../pages/Locations/Locations'

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path='/react-api-characters' element={<Home />} />
        <Route
          path='/react-api-characters/characters'
          element={<Characters />}
        />
        <Route path='/react-api-characters/episodes' element={<Episodes />} />
        <Route path='/react-api-characters/locations' element={<Locations />} />
      </Routes>
    </Router>
  )
}

export { RouterConfig }
