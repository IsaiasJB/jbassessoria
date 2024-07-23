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


export default function Home() {
    return (
        <Container>
            <Header/>
            <Seperator width="large"/>
            <Content>
                <ContentTitle>
                    <Title>Alguns de nossos servicos</Title>
                    <Button color="primary" size="large" icon={<CaretDoubleRight size={20}/>} iconPosition="right"
                            label="Solicite um orcamento"/>
                </ContentTitle>
                <ContentCard>
                    <Card imageSrc={contabilidade as string} title="Contabilidade" description={descriptions.contabilidade}
                          icon={<Calculator size={20}/>} />
                    <Card imageSrc={societario as string} title="Societário" description={descriptions.contabilidade}
                          icon={<UsersThree size={20}/>} tag="Contabil"/>
                    <Card imageSrc={fiscal as string} title="Fiscal" description={descriptions.contabilidade}
                          icon={<Laptop size={20}/>} tag="Contabil"/>
                    <Card imageSrc={dp as string} title="Dpto. Pessoal" description={descriptions.contabilidade}
                          icon={<AddressBook size={20}/>} />
                </ContentCard>
                <Seperator width="full"/>
            </Content>

        </Container>
    );
}