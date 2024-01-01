import { useEffect, useState } from "react"
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { Coffee } from "../../types/Card"
import { CoffeeList } from "./styles"

export const Home = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    fetch('./api/data.json')
      .then(response => response.json())
      .then((json) => setCoffees(json.coffees))
  }, []);

  return (
    <>
      <Header />
      <h1>Home</h1>

      <h2>Nossos cafés</h2>
      <CoffeeList>
        <div>
          {coffees && coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </>
  )
}