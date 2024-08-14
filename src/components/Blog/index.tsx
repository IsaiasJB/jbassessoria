import {BlogContainer, BlogSubtitle, BlogTitle, BlogWrapper} from "@/components/Blog/styles";
import {Card} from "@/components/Card";
import contabilidade from "@/assets/contabilidade.png";
import {descriptions} from "@/content/description";

export function Blog() {
    return (
        <BlogContainer>
            <BlogTitle>JBlog</BlogTitle>
            <BlogSubtitle>As últimas noticias</BlogSubtitle>
            <BlogWrapper>
                <Card imageSrc={contabilidade} title="EFD Contribuições: prazo de envio encerra AMANHÃ!" tag="Contabíl"
                      description={descriptions.contabilidade}
                />
                <Card imageSrc={contabilidade} title="Versão 10.0.8 do Programa da ECF disponível para situações especiais de 2023, 2024 e anos anteriores" tag="Contabíl"
                      description={descriptions.contabilidade}
                />
                <Card imageSrc={contabilidade} title="CFC, Fenacon e Ibracon participam de reunião com a Receita Federal para tratar da Dirbi" tag="Contabíl" description={descriptions.contabilidade}
                />
                <Card imageSrc={contabilidade} title="Banco Central comunica vazamento de dados de 39 mil chaves Pix" tag="Contabíl" description={descriptions.contabilidade}
                />
            </BlogWrapper>
        </BlogContainer>
    )
}