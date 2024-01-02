import { useRouteError } from "react-router-dom";
import { Container } from "./styles";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <Container>
        <h1>Oops!</h1>
        <p>Desculpe, um erro inesperado ocorreu.</p>
      </Container>
    </>
  )
}