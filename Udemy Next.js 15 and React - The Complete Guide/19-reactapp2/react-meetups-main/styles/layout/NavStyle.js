import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3a577e;
  padding: 0 10%;

  a {
    font-size: 1.3rem;
    text-decoration: none;
    color: #dfe7ea;

    &:hover,
    :active {
      color: white;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  margin-left: 3rem;
`;
