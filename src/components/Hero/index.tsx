import {ContentContainer, HeroButton, HeroContainer, HighlightText} from "@/components/Hero/styles";
import {Button} from "@/components/Button";
import {CaretDoubleRight} from "phosphor-react";
import React from "react";

export function Hero() {

    const handleWhatsOrcamento = () => {
        window.open('https://wa.me/556130286766?text=Olá%20gostaria%20de%20fazer%20um%20orçamento.', '_blank', 'noopener noreferrer');
    };
    const handleWhatsEmpresa = () => {
        window.open('https://wa.me/556130286766?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20abertura%20de%20empresa.', '_blank', 'noopener noreferrer');
    };

    return (
        <HeroContainer>
            <ContentContainer>
                <h1>Contabilidade</h1>
                <h1>
                    <HighlightText>inteligente</HighlightText> para
                </h1>
                <h1>
                    negócios <HighlightText>inovadores</HighlightText>
                </h1>
                <HeroButton>
                    <Button onClick={handleWhatsOrcamento} color="secondary" size="large"
                            icon={<CaretDoubleRight size={20}/>} iconPosition="right"
                            label="Solicite um orçamento"/>
                    <Button onClick={handleWhatsEmpresa} color="transparent" size="large"
                            icon={<CaretDoubleRight size={20}/>} iconPosition="right"
                            label="Abra sua empresa"/>
                </HeroButton>

            </ContentContainer>
        </HeroContainer>
    )
}