import { Container } from "./styles";

interface ItemProps {
  name: string
  imgUrl: string
  breed: string
  gender: string
}

export function Item({name, imgUrl, breed, gender}: ItemProps) {
  return(
    <Container>
      <img src={imgUrl} alt="teste" />
      <div>
        <strong>{name}</strong>
        <a>Breed: {breed}</a>
        <a>Gender: {gender}</a>
      </div>
    </Container>
  )
}
