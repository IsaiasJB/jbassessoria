import {ContentContainer, HeroButton, HeroContainer, HighlightText} from "@/components/Hero/styles";
import {Button} from "@/components/Button";
import {CaretDoubleRight} from "phosphor-react";
import React from "react";

export function Hero() {
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
                    <Button color="secondary" size="large" icon={<CaretDoubleRight size={20}/>} iconPosition="right"
                            label="Solicite um orçamento"/>
                    <Button color="transparent" size="large" icon={<CaretDoubleRight size={20}/>} iconPosition="right"
                            label="Abra sua empresa"/>
                </HeroButton>

            </ContentContainer>
        </HeroContainer>
    )
}