import {Header} from "@/components/Header";
import {Box, BoxImage, Container, Content, ContentBox, ContentTitle, Title} from "./styles";
import {Seperator} from "@/components/Separator";
import {Footer} from "@/components/Footer";
import React from "react";
import contato from "@/assets/img-contato.png";
import qrCode from "@/assets/qr-code.png";
import wpp from "@/assets/imagem-wpp.png";
import {ContactForm} from "@/components/ContactForm";
import Image from "next/image";
import {useWindowSize} from "@/utils/useWindowSize";
import {Button} from "@/components/Button";
import {WhatsappLogo} from "phosphor-react";


export default function Contact() {
    const {width = 0} = useWindowSize();

    const calculateDimensions = () => {
        if (width <= 680) {
            return {width: 333, height: 200};
        } else if (width <= 1024) {
            return {width: 480, height: 300}
        } else {
            return {width: 700, height: 497}
        }
    };

    const {width: imageWidth, height: imageHeight} = calculateDimensions();

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/556130286766?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+os+servi%C3%A7os', '_blank', 'noopener noreferrer');
    };

    return (
        <>
            <Container>
                <Header/>
                <Seperator width="large"/>
                <Content>
                    <ContentBox>
                        <ContentTitle>
                            <Title>Entre em contato conosco</Title>
                            <ContactForm/>
                        </ContentTitle>
                        <BoxImage>
                            <Image
                                src={contato.src}
                                alt="Card Img"
                                width={imageWidth}
                                height={imageHeight}
                                quality={100}
                                priority
                            />
                        </BoxImage>
                    </ContentBox>
                    <Seperator/>
                    <ContentBox>
                        <Box>
                            <ContentTitle>
                                {width <= 680
                                    ? <Title>Clique no botão para entrar em contato via WhatsApp</Title>
                                    : <Title>Escaneie o QR Code ou clique no botão para entrar em contato via
                                        WhatsApp</Title>}
                            </ContentTitle>
                            <Button onClick={handleWhatsAppClick} color="primary" size="full"
                                    icon={<WhatsappLogo size={20}/>} iconPosition="left"
                                    label="Fale conosco" css={{width: '50%'}}/>
                        </Box>

                        <BoxImage>
                            <Image
                                src={qrCode.src}
                                alt="Card Img"
                                width={300}
                                height={300}
                                quality={100}
                                priority
                            />
                            <Image
                                src={wpp.src}
                                alt="Card Img"
                                width={300}
                                height={315}
                                quality={100}
                                priority
                            />
                        </BoxImage>
                    </ContentBox>

                </Content>


            </Container>
            <Footer/>
        </>
    );
}