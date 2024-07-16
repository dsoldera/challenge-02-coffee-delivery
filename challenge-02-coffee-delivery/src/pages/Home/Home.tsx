import { useEffect, useState } from 'react'
import { Card } from '@/components/Card'

import { Coffee } from '@/types/Card'
import { Banner, BannerArea, BannerTitle, CoffeeList } from './styles'
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
      <Helmet title="Home Page" />
      <BannerArea>
        <Banner>
          <div>
            <BannerTitle>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <h3>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </h3>
            </BannerTitle>
          </div>
          <img src="/images/hero.svg" alt="Café do Coffee Delivery" />
        </Banner>
        <img src="/images/hero-bg.svg" id="hero-bg" alt="" />
      </BannerArea>
      <CoffeeList>
        <h2>Nossos cafés</h2>
        <div>
          {coffees &&
            coffees.map((coffee) => <Card key={coffee.id} coffee={coffee} />)}
        </div>
      </CoffeeList>
      <ToastContainer autoClose={2000} />
    </>
  )
}
