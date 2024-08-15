import {Header} from "@/components/Header";
import {Container} from "./styles";
import {Seperator} from "@/components/Separator";
import {Footer} from "@/components/Footer";
import React from "react";


export default function Service() {
    return (
        <>
            <Container>
                <Header/>
                <Seperator width="large"/>

            </Container>
            <Footer/>
        </>
    );
}