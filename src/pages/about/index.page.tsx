import { Header } from "@/components/Header";
import { Container } from "./styles";
import { Seperator } from "@/components/Separator";
import { Button } from "@/components/Button";
import { User } from "phosphor-react";


export default function About() {
    return (
        <Container>
            <Header />
            <Seperator width="large" />
        </Container>
    );
}