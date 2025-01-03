import styled from "styled-components";

export const Container = styled.section`
  text-align: center;
`;

export const ImageBox = styled.div`
  img {
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  margin-top: 1rem;
  margin-bottom: 2.5rem;

  h1 {
    font-size: 2rem;
    color: #3a577e;
    font-weight: bold;
    padding-bottom: 0.5rem;
  }

  address,
  p {
    font-style: italic;
    padding-top: 0.5rem;
  }
`;

export const Loading = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 2rem;
  font-style: italic;
`;
