import { styled } from "@/styles";

export const FooterContainer = styled('footer', {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '$primary',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
});
export const FooterSection = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',

    '@mobile': {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
    }
});

export const FooterItem = styled('div', {
    flex: '1',
    margin: '0 20px',
    textAlign: 'left',

    '&:first-child': {
        textAlign: 'left',
    },

    '&:last-child': {
        textAlign: 'right',
    },
});

export const FooterTitle = styled('h4', {
    marginBottom: '10px',
    color: '$highlight',
});

export const ContactInfo = styled('div', {
    marginBottom: '10px',
    color: '$secondary',
    fontSize: '14px',


    '& p': {
        margin: '5px 0',
    },
});

export const SocialLinks = styled('div', {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',

    '& a': {
        marginRight: '10px',
    },
});

export const SocialIcon = styled('a', {
    color: '#D9D9D6',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'color 0.3s',

    '&:hover': {
        color: '#FFD700',
    },

    '& svg': {
        width: '24px',
        height: '24px',
    },
});

export const LogoLink = styled('div', {
    display: 'inline-block',
    width: '100%',

    '@mobile': {
        width: '100%',
        padding: '20px',
        position: 'absolute',
        top: 0,
        right: 10,

    }
});

export const CopyrightSection = styled('div', {
    position: 'absolute',
    color: '$secondary',
    bottom: '10px',
    width: '100%',
    textAlign: 'center',
    fontSize: '14px',
});