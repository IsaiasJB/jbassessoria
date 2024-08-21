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
                    <BoxAbout text={descriptions.sobreNos1} text2={descriptions.sobreNos2} imageSrc={`${cartao.src}`}/>
                    <Seperator width="full"/>
                    <ContentTitle>
                        <Title>Conheça as empresas que não se preocupam mais com a contabilidade</Title>
                    </ContentTitle>
                    <Seperator width="full"/>
                    <BoxAbout text={descriptions.sobreNos3} text2={descriptions.sobreNos4} isImageAbout
                              imageSrc={`${contabilidade.src}`}/>
                </Content>

            </Container>
            <Footer/>
        </>

    );
}