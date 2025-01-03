import styled from "styled-components";

export const Container = styled.li`
  margin-bottom: 2.5rem;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  text-align: center;
  padding: 1rem;

  h3 {
    font-size: 1.25rem;
    color: #2c292b;
  }

  address {
    padding: 0.5rem 0;
  }
`;

export const Button = styled.div`
  padding-bottom: 1rem;
  text-align: center;

  button {
    font: inherit;
    cursor: pointer;
    color: #5573a0;
    border: 1px solid #5573a0;
    background-color: transparent;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;

    &:hover,
    :active {
      background-color: #dde8f3;
    }
  }
`;
