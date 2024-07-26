import {BoxContainer, BoxImage, BoxText, BoxTitle} from "@/components/Box/styles";
import {descriptions} from "@/content/description";
import cartao from "@/assets/fiscal.png";
import Image from "next/image";

export function Box() {
    return (
        <BoxContainer>
            <BoxTitle>
                <h2>Sobre nós</h2>
            </BoxTitle>
            <BoxText>{descriptions.sobreNos}</BoxText>
            <BoxImage>
                <Image src={cartao as string} alt="Card Img" quality={100} priority/>
            </BoxImage>
        </BoxContainer>
    )
}