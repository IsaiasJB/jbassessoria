import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Avatar,
    Name,
    Position,
    Quote,
    Testimonial,
    TestimonialsContainer, TestimonialWrapper, Title
} from "@/components/TestimonialsCarousel/styles";

import societario from "../../assets/socioetario.png"
import maria from "../../assets/maria.png"
import joao from "../../assets/joao.png"


const testimonials = [
    {
        name: 'Maria Silva',
        position: 'Proprietária\nDoçuras da Maria',
        quote: 'Desde o primeiro contato, me senti acolhida e compreendida. A equipe é extremamente profissional, atenciosa e sempre disposta a esclarecer qualquer dúvida, por menor que seja.',
        avatar: maria.src,
    },
    {
        name: 'João Oliveira',
        position: 'Gerente\nTech Solutions',
        quote: 'A JB Assessoria é um parceiro estratégico para o meu negócio. Eles nos ajudam a otimizar nossos impostos, identificar oportunidades de economia e tomar decisões mais inteligentes. A confiança que depositamos neles é total.',
        avatar: joao.src,
    },
];
export function TestimonialsCarousel() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <TestimonialsContainer>
            <Title>O que os nossos clientes dizem</Title>

                <Slider {...settings} >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialWrapper key={index}>
                            <Testimonial>
                                <Avatar src={testimonial.avatar} alt={testimonial.name} />
                                <Name>{testimonial.name}</Name>
                                <Position>{testimonial.position}</Position>
                                <Quote>{testimonial.quote}</Quote>
                            </Testimonial>
                        </TestimonialWrapper>

                    ))}
                </Slider>



        </TestimonialsContainer>
    );
};