import {styled} from "@/styles"
import hero from "../../assets/hero-about.png"


export const HeroContainer = styled('div', {
    width: '100%',
    backgroundImage: `url(${hero.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',

    '@tablet': {
        height: '25vh',
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
    },

    '@mobile': {
        height: '16vh',
        backgroundSize: 'cover',
    }
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
        fontSize: '22px',
    },
    '@mobile': {
        fontSize: '$3',
        paddingLeft: '100px',
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