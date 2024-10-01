import {Header} from "@/components/Header";
import {
    Container,
    Content,
    ContentTitle,
    DialogClose,
    DialogContent,
    DialogOverlay,
    DialogTitle,
    SobreBox,
    SobreItem,
    SobreList,
    SobreListItem,
    SobreTitle,
    SobreWrapper,
    Title
} from "./styles";
import {Seperator} from "@/components/Separator";
import {Footer} from "@/components/Footer";
import React, {useState} from "react";
import {HeroAbout} from "@/components/HeroAbout";
import contabilidade from "@/assets/contabilidade.png";
import cartao from "@/assets/logocartao.png";
import {descriptions} from "@/content/description";
import {BoxAbout} from "@/components/BoxAbout";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import vision from "@/assets/icones/vision.png";
import values from "@/assets/icones/values.png";
import mission from "@/assets/icones/mission.png";

const {sobreNos1, sobreNos3, sobreNos2, sobreNos4, sobreNos5, missao, visao, valores} = descriptions;

interface SobreProps {
    id: number;
    name: string;
    icon: string;
    text: string[];
}

const sobre = [
    {id: 1, name: 'Missão', icon: mission.src, text: missao},
    {
        id: 2,
        name: 'Visão',
        icon: vision.src,
        text: visao
    },
    {
        id: 3,
        name: 'Valores',
        icon: values.src,
        text: valores
    },
];
export default function About() {


    const [selectedService, setSelectedService] = useState<SobreProps | null>(null)

    const handleServiceClick = (service: SobreProps) => {
        setSelectedService(service)
    }
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
                    <SobreWrapper>
                        {sobre.map((service) => (
                            <SobreItem key={service.id}>
                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <SobreBox onClick={() => handleServiceClick(service)}>
                                            <Image
                                                src={service.icon}
                                                alt="Icone Img"
                                                width={150}
                                                height={150}
                                                quality={100}
                                                priority
                                            /></SobreBox>
                                    </Dialog.Trigger>

                                    <Dialog.Portal>
                                        <DialogOverlay/>
                                        <DialogContent>
                                            <DialogTitle>{selectedService?.name} da JB Assessoria
                                                Contábil </DialogTitle>
                                            <SobreList>
                                                {selectedService?.text.map((serv, idx) => (
                                                    <SobreListItem key={idx}>{serv}</SobreListItem>
                                                ))}
                                            </SobreList>
                                            <DialogClose>Fechar</DialogClose>
                                        </DialogContent>
                                    </Dialog.Portal>
                                </Dialog.Root>

                                <SobreTitle>{service.name}</SobreTitle>
                            </SobreItem>
                        ))}
                    </SobreWrapper>
                    <Seperator width="full"/>
                    <BoxAbout texts={[sobreNos3, sobreNos4, sobreNos5]} isImageAbout
                              imageSrc={`${contabilidade.src}`}/>
                </Content>

            </Container>
            <Footer/>
        </>

    );
}