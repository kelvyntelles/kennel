import { Container } from "./styles";

interface Props {
  title: string
}

export function TitleHeader({title}: Props) {
  return(
    <Container>
      All {title}
    </Container>
  )
}
