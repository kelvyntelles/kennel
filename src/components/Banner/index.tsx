import { Container } from "./styles";

import DogImg from '../../assets/dog.jpg'

interface BannerProps {
  img: string
}

export function Banner({img}: BannerProps) {
  return (
    <Container>
      <img src={img} />
    </Container>
  )
}
