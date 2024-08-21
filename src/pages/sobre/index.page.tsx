import {Header} from "@/components/Header";
import {Container, Content, ContentTitle, Title} from "./styles";
import {Seperator} from "@/components/Separator";
import {Footer} from "@/components/Footer";
import React from "react";
import {HeroAbout} from "@/components/HeroAbout";
import contabilidade from "@/assets/contabilidade.png";
import cartao from "@/assets/logocartao.png";
import {descriptions} from "@/content/description";
import {BoxAbout} from "@/components/BoxAbout";


export default function About() {
    const {sobreNos1, sobreNos3, sobreNos2, sobreNos4, sobreNos5} = descriptions;
    return (
        <>
            <Container>
                <Header/>
                <Seperator width="large"/>
                <HeroAbout/>
                <Content>
                    <ContentTitle>
                        <Title>Contabilidade inteligente para negócios inovadores</Title>
                    </ContentTitle>
                    <Seperator/>
                    <BoxAbout texts={[sobreNos1, sobreNos2]} imageSrc={`${cartao.src}`}/>
                    <Seperator width="full"/>
                    <ContentTitle>
                        <Title>Conheça as empresas que não se preocupam mais com a contabilidade</Title>
                    </ContentTitle>
                    <Seperator width="full"/>
                    <BoxAbout texts={[sobreNos3, sobreNos4, sobreNos5]} isImageAbout
                              imageSrc={`${contabilidade.src}`}/>
                </Content>

            </Container>
            <Footer/>
        </>

    );
}