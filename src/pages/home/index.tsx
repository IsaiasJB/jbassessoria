import {Header} from "@/components/Header";
import {Container, Content, ContentCard, ContentTitle, Title} from "./styles";
import {Seperator} from "@/components/Separator";
import {Card} from "@/components/Card";
import {AddressBook, Calculator, CaretDoubleRight, Laptop, UsersThree} from "phosphor-react";
import {Button} from "@/components/Button";

import contabilidade from "../../assets/contabilidade.png"
import societario from "../../assets/socioetario.png"
import fiscal from "../../assets/fiscal.png"
import dp from "../../assets/dp.png"
import {descriptions} from "@/content/description";
import {Footer} from "@/components/Footer";
import {Box} from "@/components/Box";
import {TestimonialsCarousel} from "@/components/TestimonialsCarousel";
import React from "react";
import {Hero} from "@/components/Hero";


export default function Home() {

    const handleWhatsOrcamento = () => {
        window.open('https://wa.me/556130286766?text=Olá%20gostaria%20de%20fazer%20um%20orçamento.', '_blank', 'noopener noreferrer');
    };

    return (
        <>
            <Container>
                <Header/>
                <Seperator width="large"/>
                <Hero/>
                <Content>
                    <ContentTitle>
                        <Title>Alguns de nossos servicos</Title>
                        <Button onClick={handleWhatsOrcamento} color="primary" size="large"
                                icon={<CaretDoubleRight size={20}/>} iconPosition="right"
                                label="Solicite um orçamento"/>
                    </ContentTitle>
                    <ContentCard>
                        <Card imageSrc={`${contabilidade.src}`} title="Contabilidade"
                              description={descriptions.contabilidade}
                              icon={<Calculator size={20}/>}/>
                        <Card imageSrc={`${societario.src}`} title="Societário" description={descriptions.societario}
                              icon={<UsersThree size={20}/>}/>
                        <Card imageSrc={`${fiscal.src}`} title="Fiscal" description={descriptions.fiscal}
                              icon={<Laptop size={20}/>}/>
                        <Card imageSrc={`${dp.src}`} title="Dpto. Pessoal" description={descriptions.dp}
                              icon={<AddressBook size={20}/>}/>
                    </ContentCard>
                    <Seperator width="full"/>
                    <Box/>
                    <Seperator width="full"/>
                    <TestimonialsCarousel/>
                    {/*<Seperator width="full"/>*/}
                    {/*<Blog/>*/}
                </Content>


            </Container>
            <Footer/>
        </>


    );
}

