import Link from "next/link";
import { Header, Logo, List, ListItem } from "@/styles/layout/NavStyle";

function Nav() {
  return (
    <Header>
      <Logo>React Meetups</Logo>
      <nav>
        <List>
          <ListItem>
            <Link href="/">All Meetups</Link>
          </ListItem>
          <ListItem>
            <Link href="/new-meetup">Add New Meetup</Link>
          </ListItem>
        </List>
      </nav>
    </Header>
  );
}

export default Nav;
