import { Header } from "@/components/Header";
import { Container } from "./styles";
import { Separator } from "@/components/Separator";


export default function Home() {
    return (
        <Container>
            <Header />
            <Separator width="large" />
        </Container>
    );
}