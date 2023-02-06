import { Item } from "../Item";
import { Container } from "./styles";

interface RenderItensProps {
  items: any[]
}

export function RenderItem({items}: RenderItensProps) {
  return (
    <Container>
      {items.map( (item) =>
        <Item key={item.id} name={item.name} imgUrl={item.imgUrl} breed={item.breed} gender={item.gender} />
      )}
    </Container>
  )
}
