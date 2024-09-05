import {Container, ServiceBox, ServiceItem, ServicesWrapper, ServiceTitle} from "./styles";
import Image from "next/image";

const services = [
    { id: 1, name: 'Contábil' },
    { id: 2, name: 'Trabalhista' },
    { id: 3, name: 'Tributária/Fiscal' },
    { id: 4, name: 'Empresarial' },
];

interface ListaServicosProps {
    imageSrc: string
}
export function ListaServicos({imageSrc}: Readonly<ListaServicosProps>) {
    return (
        <Container>
            <ServicesWrapper>
                {services.map((service) => (
                    <ServiceItem key={service.id}>
                        <ServiceBox>
                            <Image
                            src={imageSrc}
                            alt="Icone Img"
                            width={70}
                            height={70}
                            quality={100}
                            priority
                        /></ServiceBox>
                        <ServiceTitle>{service.name}</ServiceTitle>
                    </ServiceItem>
                ))}
            </ServicesWrapper>
        </Container>
    )

}