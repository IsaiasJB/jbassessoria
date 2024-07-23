import { Header } from "@/components/Header";
import { Container } from "./styles";
import { Seperator } from "@/components/Separator";


export default function Blog() {
    return (
        <Container>
            <Header />
            <Seperator width="large" />
        </Container>
    );
}