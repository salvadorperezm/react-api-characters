import './App.css'
import { useState, useEffect } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import Card from './Card'
import { HomeLayout } from '../src/layout/HomeLayout'
import { BrowserRouter } from 'react-router-dom'
const axios = require('axios')

function App() {
  const defaultUser = {
    id: '19f09h1ft',
    name: 'John Doe',
    profession: 'Not Available',
    email: 'johndoe@email.com',
    location: 'New York, NY',
  }

  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState('')

  function getData() {
    axios
      .get(process.env.REACT_APP_PUBLIC_URL)
      .then((res) => {
        console.log(res.data.results)
        setUsers(res.data.results)
      })
      .catch(() => {
        setUsers(defaultUser)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <BrowserRouter>
      <HomeLayout>
        <main className='main-container'>
          <div className='main-container__text'>
            <h1 className='main-container__title'>Rick and Morty Characters</h1>
          </div>
          <SimpleGrid
            minChildWidth='200px'
            className='main-container__grid'
            gap='20px'
          >
            {users.map((user) => {
              return <Card props={user} key={user.id} />
            })}
          </SimpleGrid>
        </main>
      </HomeLayout>
    </BrowserRouter>
  )
}

export default App
