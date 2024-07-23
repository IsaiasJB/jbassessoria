import {
    CardContainer,
    CardContent,
    CardDescription,
    CardTitle,
    IconWrapper,
    ImageContainer,
    Tag
} from "@/components/Card/styles";
import React from "react";

import Image from 'next/image'

interface CardProps {
    imageSrc: string
    title: string
    description: string
    icon?: React.ReactNode
    tag?: string
}

export function Card({imageSrc, title, description, icon, tag}: CardProps) {
    return (
        <CardContainer>
            <ImageContainer>
                <Image src={imageSrc} alt="Card Img" layout="fill" quality={100}  priority/>
            </ImageContainer>
            <CardContent>
                {tag && <Tag>{tag}</Tag>}
                <CardTitle>
                    {icon && <IconWrapper>{icon}</IconWrapper>}
                    {title}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>

        </CardContainer>
    )
}