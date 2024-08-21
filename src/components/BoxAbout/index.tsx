import {BoxContainer, BoxImage, BoxText, BoxTitle} from "./styles";
import Image from "next/image";
import {useWindowSize} from "@/utils/useWindowSize";


interface BoxAbout {
    title?: string
    text?: string
    text2?: string
    imageSrc: string
    isTitle?: boolean
    isImageAbout?: boolean
}

export function BoxAbout({title, text, text2, imageSrc, isTitle, isImageAbout}: BoxAbout) {
    const {width} = useWindowSize();

    const currentWidth = width ?? 0;

    const isMobile = currentWidth <= 680;
    const isTablet = currentWidth > 681 && currentWidth <= 1024;
    const isDesktop = currentWidth > 1025;


    const imageWidth = width && width <= 680 ? 333 : 480;
    const imageHeight = width && width <= 680 ? 200 : 200;


    const imageAboutWidth = isMobile ? 300 : isTablet ? 480 : 600
    const imageAboutHeight = isMobile ? 200 : isTablet ? 250 : 400


    return (
        <BoxContainer>
            {
                isTitle && <BoxTitle>{title}</BoxTitle>
            }
            <BoxText>
                <p>{text}</p>
                <br/>
                <p>{text2}</p>
            </BoxText>
            <BoxImage>
                {
                    isImageAbout ?
                        <Image src={imageSrc} alt="Card Img" width={imageAboutWidth} height={imageAboutHeight}
                               quality={100}
                               priority/> :
                        <Image src={imageSrc} alt="Card Img" width={imageWidth} height={imageHeight} quality={100}
                               priority/>
                }

            </BoxImage>
        </BoxContainer>
    )
}