import { Header } from "@/components/Header";
import { Container } from "./styles";
import { Separator } from "@/components/Separator";
import { Button } from "@/components/Button";
import { User } from "phosphor-react";


export default function About() {
    return (
        <Container>
            <Header />
            <Separator width="large" />
        </Container>
    );
}