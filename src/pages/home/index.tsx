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
import {Blog} from "@/components/Blog";
import {useEffect, useState} from "react";


export default function Home() {
    const { width, height } = useWindowSize();
    return (
        <Container>
            <Header/>
            <Seperator width="large"/>
            <Content>
                <p>Largura da tela: {width}px</p>
                <p>Altura da tela: {height}px</p>
                <ContentTitle>
                    <Title>Alguns de nossos servicos</Title>
                    <Button color="primary" size="large" icon={<CaretDoubleRight size={20}/>} iconPosition="right"
                            label="Solicite um orcamento"/>
                </ContentTitle>
                <ContentCard>
                    <Card imageSrc={contabilidade} title="Contabilidade" description={descriptions.contabilidade}
                          icon={<Calculator size={20}/>}/>
                    <Card imageSrc={societario} title="Societário" description={descriptions.societario}
                          icon={<UsersThree size={20}/>}/>
                    <Card imageSrc={fiscal} title="Fiscal" description={descriptions.fiscal}
                          icon={<Laptop size={20}/>}/>
                    <Card imageSrc={dp} title="Dpto. Pessoal" description={descriptions.dp}
                          icon={<AddressBook size={20}/>}/>
                </ContentCard>
                <Seperator width="full"/>
                <Box/>
                <Seperator width="full"/>
                <TestimonialsCarousel/>
                <Seperator width="full"/>
                <Blog/>
            </Content>
            <Footer/>

        </Container>
    );
}

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}

function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Função para atualizar o tamanho da janela
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Adiciona o event listener para monitorar o resize
        window.addEventListener('resize', handleResize);

        // Chama a função pela primeira vez para setar o tamanho inicial
        handleResize();

        // Remove o event listener ao desmontar o componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}