import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 1rem;
`;

export const Wrapper = styled.div`
  margin-bottom: 0.5rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    font: inherit;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 100%;
  }
`;

export const Button = styled.div`
  margin-top: 1rem;
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    color: #5573a0;
    border: 1px solid #5573a0;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    font-weight: bold;

    &:hover,
    :active {
      background-color: #dde8f3;
    }
  }
`;
