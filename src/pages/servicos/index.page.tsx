import {Header} from "@/components/Header";
import {Container} from "./styles";
import {Seperator} from "@/components/Separator";
import {Footer} from "@/components/Footer";
import React from "react";
import {HeroAbout} from "@/components/HeroAbout";


export default function Service() {
    return (
        <>
            <Container>
                <Header/>
                <Seperator width="large"/>
                <HeroAbout/>

            </Container>
            <Footer/>
        </>
    );
}