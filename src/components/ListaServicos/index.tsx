import {
    Container, DialogClose,
    DialogContent,
    DialogOverlay,
    DialogTitle,
    ServiceBox,
    ServiceItem, ServiceList, ServiceListItem,
    ServicesWrapper,
    ServiceTitle
} from "./styles"
import Image from "next/image";
import iconContabil from "@/assets/icones/taxes_10010280.png"
import iconTrabalhista from "@/assets/icones/business.png"
import iconFiscal from "@/assets/icones/budget.png"
import iconEmpresarial from "@/assets/icones/businessman.png"
import {useState} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {descriptions} from "@/content/description";

const {contabil, empresarial, tributario, trabalhista} = descriptions;

interface Service {
    id: number;
    name: string;
    icon: string;
    servicesList: string[];
}

const services = [
    {id: 1, name: 'Contábil', icon: iconContabil.src, servicesList: contabil},
    {
        id: 2,
        name: 'Trabalhista',
        icon: iconTrabalhista.src,
        servicesList: trabalhista
    },
    {
        id: 3,
        name: 'Tributária / Fiscal',
        icon: iconFiscal.src,
        servicesList: tributario
    },
    {
        id: 4,
        name: 'Empresarial',
        icon: iconEmpresarial.src,
        servicesList: empresarial
    },
];


export function ListaServicos() {
    const [selectedService, setSelectedService] = useState<Service | null>(null)

    const handleServiceClick = (service: Service) => {
        setSelectedService(service)
    }

    return (
        <Container>
            <ServicesWrapper>
                {services.map((service) => (
                    <ServiceItem key={service.id}>
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <ServiceBox onClick={() => handleServiceClick(service)} >
                                    <Image
                                        src={service.icon}
                                        alt="Icone Img"
                                        width={55}
                                        height={55}
                                        quality={100}
                                        priority
                                    /></ServiceBox>
                            </Dialog.Trigger>

                            <Dialog.Portal>
                                <DialogOverlay/>
                                <DialogContent>
                                    <DialogTitle>{selectedService?.name}</DialogTitle>
                                    <ServiceList>
                                        {selectedService?.servicesList.map((serv, idx) => (
                                            <ServiceListItem key={idx}>{serv}</ServiceListItem>
                                        ))}
                                    </ServiceList>
                                    <DialogClose>Fechar</DialogClose>
                                </DialogContent>
                            </Dialog.Portal>
                        </Dialog.Root>

                        <ServiceTitle>{service.name}</ServiceTitle>
                    </ServiceItem>
                ))}
            </ServicesWrapper>
        </Container>
    )

}