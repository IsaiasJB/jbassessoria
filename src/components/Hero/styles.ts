import { styled } from "@/styles"
import hero from "../../assets/hero-jb.png"


export const HeroContainer = styled('div', {
    width: '100%',
    backgroundImage: `url(${hero.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',


    // '@desktop': {
    //     justifyContent: 'space-between',
    // },
    //
    // '@tablet': {
    //     justifyContent: 'space-around',
    // }
})

export const ContentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    paddingLeft: '200px',
    color: 'white',
    gap: '$2',
    fontSize: '$5',

    '@tablet': {
        fontSize: '$4',
    },
    '@mobile': {
        fontSize: '$3',
    }
});

export const HeroButton = styled('div', {
    display: 'flex',
    gap: '$4',
    marginTop: '10px',

    '@mobile': {
        flexDirection: 'column',
    }
});

export const HighlightText = styled('span', {
    color: '$highlight',
});