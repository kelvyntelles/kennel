import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  margin-left: 8rem;
  margin-right: 8rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    margin-left: 0px;
    margin-right: 0px;
    align-items: left;
  }
`

