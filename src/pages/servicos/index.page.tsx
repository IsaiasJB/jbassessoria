import {Header} from "@/components/Header";
import {Container, Content, ContentTitle, Title} from "./styles";
import {Seperator} from "@/components/Separator";
import {Footer} from "@/components/Footer";
import React from "react";
import {HeroAbout} from "@/components/HeroAbout";
import {descriptions} from "@/content/description";
import servico from "@/assets/img-servicos.png"
import icone from "@/assets/icones/taxes_10010280.png"
import {BoxAbout} from "@/components/BoxAbout";
import {ListaServicos} from "@/components/ListaServicos";


export default function Service() {

    const {servicos} = descriptions;

    return (
        <>
            <Container>
                <Header/>
                <Seperator width="large"/>
                <HeroAbout/>
                <Content>
                    <BoxAbout isTitle title={"Concentre-se no seu negócio, deixe a contabilidade com a gente!"} texts={[servicos]} imageSrc={`${servico.src}`} isImageAbout isServiceScreen />
                    <Seperator/>
                    <ContentTitle>
                        <Title>Nossos Serviços</Title>
                    </ContentTitle>
                    <ListaServicos/>

                </Content>


            </Container>
            <Footer/>
        </>
    );
}