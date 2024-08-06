import { Container, Link, Menu } from './styles';
import Image from 'next/image'
import { User } from 'phosphor-react'

import logo from "../../assets/LogoJB.svg"
import { useRouter } from 'next/router';
import { Button } from '../Button';

const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre nós', href: '/about' },
    { label: 'Serviços', href: '/services' },
    { label: 'Contato', href: '/contact' },
    { label: 'Blog', href: '/blog' },
]

export function Header() {
    const location = useRouter()

    return (
        <Container>
            <Image
                src={logo}
                alt="Picture of the author"
                quality={100}
                priority
            />
            <Menu>
                {menuItems.map(menu =>
                    <Link
                        key={menu.label}
                        isActive={location.pathname === menu.href}
                    >
                        <a href={menu.href}>{menu.label}</a>
                    </Link>
                )}
            </Menu>
            <Button color="primary" size="large"  icon={<User size={20} />} iconPosition="left" label="Área do cliente"/>
        </Container>
    )
}