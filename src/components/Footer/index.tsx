import {
    ContactInfo, CopyrightSection,
    FooterContainer,
    FooterItem,
    FooterSection,
    FooterTitle,
    LogoLink,
    SocialIcon,
    SocialLinks
} from "@/components/Footer/styles";
import Image from "next/image";
import logo from "@/assets/Vector.svg";



export function Footer() {
    return (
        <FooterContainer>
            <FooterSection>
                <FooterItem>
                    <FooterTitle>Endereço</FooterTitle>
                    <ContactInfo>
                        <p>Torre JK Shopping</p>
                        <p>Sala 1317, Brasília, DF</p>
                    </ContactInfo>
                    <FooterTitle>Telefone</FooterTitle>
                    <ContactInfo>
                        {/*<p>(61) 9 9194 9392</p>*/}
                        <p>(61) 3028-6766</p>
                    </ContactInfo>
                </FooterItem>
                <FooterItem>
                    <FooterTitle>E-mail</FooterTitle>
                    <ContactInfo>
                        <p>contato@jbassessoriacontabil.com</p>
                    </ContactInfo>
                </FooterItem>
                <FooterItem>
                    <FooterTitle>Redes Sociais</FooterTitle>
                    <SocialLinks>
                        <SocialIcon href="https://www.instagram.com/jb_contabilempresarial" target="_blank" aria-label="Instagram">
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.325 6.61616H20.34M7.34998 25.8162H19.35C22.6636 25.8162 25.35 23.1298 25.35 19.8162V7.81616C25.35 4.50245 22.6636 1.81616 19.35 1.81616H7.34998C4.03627 1.81616 1.34998 4.50245 1.34998 7.81616V19.8162C1.34998 23.1298 4.03627 25.8162 7.34998 25.8162ZM18.975 13.8162C18.975 16.9228 16.4566 19.4412 13.35 19.4412C10.2434 19.4412 7.72498 16.9228 7.72498 13.8162C7.72498 10.7096 10.2434 8.19116 13.35 8.19116C16.4566 8.19116 18.975 10.7096 18.975 13.8162Z"
                                    stroke="#D9D9D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </SocialIcon>
                        <SocialIcon href="https://www.facebook.com" aria-label="Facebook">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M2.40554 0.816162C1.26511 0.816162 0.349976 1.74425 0.349976 2.87753V22.7549C0.349976 23.8881 1.26512 24.8162 2.40554 24.8162H22.2945C23.4348 24.8162 24.35 23.8881 24.35 22.7549V2.87753C24.35 1.74425 23.4349 0.816162 22.2945 0.816162H2.40554ZM2.34998 2.87753C2.34998 2.83845 2.38003 2.81616 2.40554 2.81616H22.2945C22.3199 2.81616 22.35 2.83845 22.35 2.87753V22.7549C22.35 22.7939 22.32 22.8162 22.2945 22.8162H16.0243V17.0928H19.1452L19.6808 13.4274H16.0243V10.9822C16.0243 10.3072 16.5715 9.76001 17.2465 9.76001H19.6808V5.48218H15.1796L15.1489 5.48233C13.3881 5.49924 11.9744 6.94036 11.9913 8.70121L12.0033 9.94821L11.9604 13.4274H8.68335V17.0928H12.0033V22.8162H2.40554C2.38002 22.8162 2.34998 22.7939 2.34998 22.7549V2.87753Z"
                                      fill="#D9D9D6"/>
                            </svg>
                        </SocialIcon>
                        <SocialIcon href="https://www.linkedin.com" aria-label="LinkedIn">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.5753 0.743821H2.12462C1.89474 0.740633 1.66647 0.782754 1.45288 0.86778C1.23927 0.952818 1.0445 1.0791 0.879713 1.23941C0.714913 1.39972 0.583311 1.59092 0.492418 1.8021C0.401525 2.01327 0.353126 2.24029 0.349976 2.47018V23.1623C0.353126 23.3922 0.401525 23.6192 0.492418 23.8303C0.583311 24.0416 0.714913 24.2327 0.879713 24.393C1.0445 24.5534 1.23927 24.6796 1.45288 24.7647C1.66647 24.8497 1.89474 24.8919 2.12462 24.8886H22.5753C22.8052 24.8919 23.0335 24.8497 23.247 24.7647C23.4606 24.6796 23.6554 24.5534 23.8202 24.393C23.985 24.2327 24.1166 24.0416 24.2075 23.8303C24.2984 23.6192 24.3468 23.3922 24.35 23.1623V2.47018C24.3468 2.24029 24.2984 2.01327 24.2075 1.8021C24.1166 1.59092 23.985 1.39972 23.8202 1.23941C23.6554 1.0791 23.4606 0.952818 23.247 0.86778C23.0335 0.782754 22.8052 0.740633 22.5753 0.743821ZM7.45962 21.5123H3.83462V9.66753H7.45962V21.5123ZM5.64712 8.04382C5.17264 8.04382 4.71048 7.8916 4.33368 7.61272C3.95688 7.33383 3.68674 6.9443 3.57241 6.50716C3.45808 6.07 3.50745 5.60569 3.71157 5.2017C3.9157 4.7977 4.2625 4.47347 4.68627 4.28216C5.11003 4.09082 5.58295 4.04591 6.03468 4.15511C6.48642 4.2643 6.88716 4.5212 7.17092 4.88176C7.45467 5.24232 7.60386 5.68483 7.59194 6.13784C7.59209 6.68314 7.37112 7.2077 6.9747 7.60643C6.57827 8.00516 6.04829 8.23853 5.48962 8.24382H5.64712ZM21.0753 21.5123H17.4596V15.1803C17.4596 13.7003 17.0846 12.5123 15.5721 12.5123C14.6019 12.5123 13.9753 13.1438 13.6971 13.8253C13.603 14.0624 13.5618 14.3228 13.5771 14.582V21.5053H9.94712C10.0024 14.1523 9.94712 9.66753 9.94712 9.66753H13.4596V11.3688C13.9531 10.5075 15.0146 9.51232 16.8524 9.51232C19.4865 9.51232 21.0753 11.2357 21.0753 14.7928V21.5123Z"
                                    fill="#D9D9D6"/>
                            </svg>
                        </SocialIcon>
                    </SocialLinks>
                </FooterItem>
                <FooterItem>
                    <LogoLink>
                        <Image src={logo.src}  alt="Card Img" width={100} height={84}  quality={100} priority/>
                    </LogoLink>
                </FooterItem>
            </FooterSection>
            <CopyrightSection>
                <p>Copyright 2024 JB Assessoria Contábil Empresarial</p>
            </CopyrightSection>
        </FooterContainer>
    );
}