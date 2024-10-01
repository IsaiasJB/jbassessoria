import {Box, Container, Content, ContentBox, ContentTitle, Title} from "./styles";
import {Header} from "@/components/Header";
import {Seperator} from "@/components/Separator";
import React from "react";
import {Footer} from "@/components/Footer";
import {HeroAbout} from "@/components/HeroAbout";

export default function Links() {
    return (
        <>
            <Container>
                <Header/>
                <Seperator width="large"/>
                <HeroAbout/>
                <Content>
                    <ContentTitle>
                        <Title>Links Úteis</Title>
                    </ContentTitle>
                    <Seperator width="large"/>
                    <ContentBox>
                        <Box>
                            <h2>Portais e Serviços</h2>
                            <a href="https://servicos.receitafederal.gov.br/home" target="_blank">Serviços da Receita
                                Federal</a>
                            <a href="https://www.gov.br/esocial/pt-br" target="_blank">Portal eSocial</a>
                            <a href="https://www.gov.br/trabalho-e-emprego/pt-br/servicos/empregador/fgtsdigital"
                               target="_blank">Portal do FGTS Digital</a>
                        </Box>
                        <Box>
                            <h2>Junta Comercial por Estado</h2>
                            <a href="https://jucis.df.gov.br/" target="_blank">Junta Comercial Distrito Federal</a>
                            <a href="https://www.gov.br/esocial/pt-br" target="_blank">Junta Comercial Goias</a>
                        </Box>
                        <Box>
                            <h2>Públicos e Governo</h2>
                            <a href="https://www.gov.br/receitafederal/pt-br" target="_blank">Receita Federal</a>
                            <a href="https://www.gov.br/previdencia/pt-br" target="_blank">Previdência Social </a>
                            <a href="https://www8.receita.fazenda.gov.br/SimplesNacional/" target="_blank">Simples
                                Nacional</a>
                            <a href="http://sped.rfb.gov.br/" target="_blank">SPED</a>
                            <a href="https://www.caixa.gov.br/Paginas/home-caixa.aspx" target="_blank">Caixa Econômica
                                Federal</a>
                            <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" target="_blank">Portal
                                do Empreendedor</a>
                            <a href="https://www.correios.com.br/" target="_blank">Correios</a>
                            <a href="https://cfc.org.br/" target="_blank">CFC (Conselho Federal de Contabilidade)</a>
                        </Box>
                        <Box>
                            <h2>Utilidades</h2>
                            <a href="https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp" target="_blank">Comprovante de Inscrição e Situação Cadastral</a>
                            <a href="http://www.mtecbo.gov.br/cbosite/pages/home.jsf" target="_blank">CBO</a>
                            <a href="https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/cadastros/cei" target="_blank">CEI (Cadastro Específico do INSS)</a>
                            <a href="https://www.gov.br/receitafederal/pt-br/assuntos/construcao-civil/cno" target="_blank">CNO</a>
                            <a href="https://www.gov.br/previdencia/pt-br" target="_blank">INSS - Formulários</a>
                            <a href="https://sicalc.receita.economia.gov.br/sicalc/principal" target="_blank">SicalcWeb</a>
                            <a href="https://conectividadesocialv2.caixa.gov.br/sicns/" target="_blank">Conentividade Social</a>
                            <a href="https://concla.ibge.gov.br/busca-online-cnae.html" target="_blank">Busca Online CNAE</a>
                        </Box>
                    </ContentBox>

                </Content>
            </Container>
            <Footer/>
        </>

    )
}