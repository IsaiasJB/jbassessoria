import { Container, Header, Menu } from "@/styles/pages/home";
import Image from 'next/image'
import { styled } from "../styles";

import logo from "../assets/LogoJb.svg"

const menuItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre nós', href: '/about' },
  { label: 'Servicos', href: '/services' },
  { label: 'Contato', href: '/contact' },
  { label: 'Blog', href: '/blog' },  // Add more links as needed...
]


export default function Home() {
  return (
    <Container>
      <Header>
        <Image
          src={logo}
          alt="Picture of the author"
        />
        <Menu>
          {menuItems.map(menu =>
            <li key={menu.label}>
              <a href={menu.href}>{menu.label}</a>
            </li>
          )}
        </Menu>
      </Header>
    </Container>
  );
}
