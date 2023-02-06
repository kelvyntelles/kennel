import { Outlet } from "react-router-dom";
import { Header } from '../../components/Header'
import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Header />
      <section>
        <Outlet />
      </section>
    </Container>
  )
}
