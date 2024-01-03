import { useRouteError } from 'react-router-dom'
import { Container } from './styles'
import { Header } from '@/components/Header'
import { Helmet } from 'react-helmet-async'

export const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <Header />
      <Helmet title="Error Page" />
      <Container>
        <h1>Oops!</h1>
        <p>Desculpe, um erro inesperado ocorreu.</p>
      </Container>
    </>
  )
}
