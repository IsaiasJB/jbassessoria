import { styled } from "@/styles";

export const BlogContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
});

export const BlogTitle = styled('h2', {
    fontSize: '$5',
    fontWeight: 'normal',
    margin: '$2 0',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    marginBottom: '24px',
    position: 'relative',
    paddingBottom: '0.2rem',

    '&::after': {
        content: '',
        position: 'absolute',
        left: 0,
        bottom: -12,
        width: '117px', // Largura da linha
        height: '2px', // Altura da linha
        backgroundColor: '$highlight',
    },

    '@tablet': {
        '&::after': {
            content: '',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '117px', // Largura da linha
            height: '2px', // Altura da linha
            backgroundColor: '$highlight',
        },

    },
    '@mobile': {
        fontSize: '$5',
        '&::after': {
            content: '',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '117px', // Largura da linha
            height: '2px', // Altura da linha
            backgroundColor: '$highlight',
        },
    },
});

export const BlogSubtitle = styled('p', {
    fontSize: '$4',
    fontWeight: 'normal',
    margin: '$2 0',
    marginBottom: '24px',
    textAlign: 'left',
})
export const BlogWrapper = styled('div', {
    '@desktop' : {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        gap: '24px',
    },

    '@tablet' : {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
    },

    '@mobile' : {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '24px',
    },
});