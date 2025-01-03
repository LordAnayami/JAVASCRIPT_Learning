import Nav from "@/layout/Nav";
import { Main, Container } from "@/styles/layout/LayoutStyle";

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
