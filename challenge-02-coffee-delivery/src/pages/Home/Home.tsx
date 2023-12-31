import { useEffect, useState } from 'react'
import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { Coffee } from '@/types/Card'
import { CoffeeList } from './styles'
import { ToastContainer } from 'react-toastify'
import { Helmet } from 'react-helmet-async'

export const HomePage = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  useEffect(() => {
    fetch('./api/data.json')
      .then((response) => response.json())
      .then((json) => setCoffees(json.coffees))
  }, [])

  return (
    <>
      <Header />
      <Helmet title="Home Page" />
      <h2>Nossos cafés</h2>
      <CoffeeList>
        <div>
          {coffees &&
            coffees.map((coffee) => <Card key={coffee.id} coffee={coffee} />)}
        </div>
      </CoffeeList>
      <ToastContainer autoClose={2000} />
    </>
  )
}
