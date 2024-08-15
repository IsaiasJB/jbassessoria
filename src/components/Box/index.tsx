import {BoxContainer, BoxImage, BoxText, BoxTitle} from "@/components/Box/styles";
import {descriptions} from "@/content/description";
import cartao from "@/assets/logocartao.png";
import Image from "next/image";
import {useWindowSize} from "@/utils/useWindowSize";


export function Box() {
    const { width } = useWindowSize();

    const imageWidth = width && width <= 680 ? 333 : 480;
    const imageHeight = width && width <= 680 ? 200 : 200;

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
                <Image src={`${cartao.src}`}  alt="Card Img" width={imageWidth} height={imageHeight} quality={100} priority/>
            </BoxImage>
        </BoxContainer>
    )
}