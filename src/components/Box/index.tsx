import {BoxContainer, BoxImage, BoxText, BoxTitle} from "@/components/Box/styles";
import {descriptions} from "@/content/description";
import cartao from "@/assets/logocartao.png";
import Image from "next/image";

export function Box() {
    return (
        <BoxContainer>
            <BoxTitle>
                Sobre nós
            </BoxTitle>
            <BoxText>
                <p>{descriptions.sobreNos1}</p>
                <br/>
                <p>{descriptions.sobreNos2}</p>
            </BoxText>
            <BoxImage>
                <Image src={cartao} alt="Card Img" width={480} height={200} quality={100} priority/>
            </BoxImage>
        </BoxContainer>
    )
}