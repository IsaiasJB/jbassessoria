import {Container, DropdownMenu, HeaderContent, Link, Menu} from './styles';
import Image from 'next/image'
import {List, User} from 'phosphor-react'

import logo from "../../assets/LogoJB.svg"
import {useRouter} from 'next/router';
import {Button} from '../Button';
import {useState} from "react";
import {Seperator} from "@/components/Separator";
import {HamburgerButton} from "@/components/HamburgerButton";

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}

const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre nós', href: '/about' },
    { label: 'Serviços', href: '/services' },
    { label: 'Contato', href: '/contact' },
    // { label: 'Blog', href: '/blog' },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    const location = useRouter()


    return (
        <Container>
            <Image
                src={logo.src}
                width={185}
                height={59}
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
            <HeaderContent>
                <Button hideLabelOnMobile color="primary" size="large"  icon={<User size={20} />} iconPosition="left" label="Área do cliente"/>
                <HamburgerButton onClick={toggleMenu} open={isOpen} className={isOpen ? 'open' : ''}>
                    <List size={30} color="#97D5EB" />
                </HamburgerButton>
            </HeaderContent>


            <DropdownMenu open={isOpen}>
                {menuItems.map(menu =>
                    <li
                        key={menu.label}
                    >
                        <a href={menu.href}>{menu.label}</a>
                        <Seperator width="large" />
                    </li>
                )}
            </DropdownMenu>
        </Container>
    )
}

