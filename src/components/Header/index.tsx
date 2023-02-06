import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return(
    <Container>
      <div>
        Kennel
      </div>
      <nav>
        <Link to="/">
          <a>Dogs</a>
        </Link>
        <Link to="/cats">
          <a>Cats</a>
        </Link>
      </nav>
    </Container>
  )
}
