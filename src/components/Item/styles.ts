import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin-bottom: 1rem;

  img {
    width: 100%;
    max-height: 7rem;
    object-fit: cover;
  }

  div {
    margin-top: .3rem;
    display: flex;
    flex-direction: column;

    a {
      margin-top: .3rem;
    }
  }

  @media (max-width: 720px) {
    width: 100%;

    img {
      max-height: 300px;
    }
  }
`
