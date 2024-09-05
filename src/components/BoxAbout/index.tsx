import {BoxContainer, BoxImage, BoxText, BoxTitle, ContentWrapper} from "./styles";
import Image from "next/image";
import {useWindowSize} from "@/utils/useWindowSize";


interface BoxAbout {
    title?: string
    texts?: string[]
    imageSrc: string
    isTitle?: boolean
    isImageAbout?: boolean
    isServiceScreen?: boolean
}

export function BoxAbout({title, texts, imageSrc, isTitle, isImageAbout, isServiceScreen}: Readonly<BoxAbout>) {
    const {width = 0} = useWindowSize();

    const calculateDimensions = (isAbout: boolean) => {
        if (width <= 680) {
            return isAbout ? {width: 333, height: 200} : {width: 320, height: 180};
        } else if (width <= 1024) {
            return isAbout ? {width: 480, height: 300} : {width: 480, height: 300};
        } else {
            return isAbout ? {width: 680, height: 400} : {width: 480, height: 200};
        }
    };

    const {width: imageWidth, height: imageHeight} = calculateDimensions(isImageAbout || false);


    return (
        <BoxContainer>
            <ContentWrapper isServiceScreen={isServiceScreen} >
                {isTitle && <BoxTitle isServiceScreen={isServiceScreen}>{title}</BoxTitle>}
                <BoxText>
                    {texts?.map((text, index) => (
                        <p key={`${index}-${text.slice(0, 10)}`}>{text}</p>
                    ))}
                </BoxText>
            </ContentWrapper>
            <BoxImage>
                <Image
                    src={imageSrc}
                    alt="Card Img"
                    width={imageWidth}
                    height={imageHeight}
                    quality={100}
                    priority
                />
            </BoxImage>
        </BoxContainer>
    )
}
