import { styled } from "@/styles";

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
})

export const Content = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '2rem 9.375rem',
    flexDirection: 'column',
    width: '100%',
})

export const ContentTitle = styled('div', {
    marginBottom: '1rem',

    '@desktop' : {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },

    '@tablet' : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    '@mobile' : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
})

export const TitleContent = styled('div', {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
})

export const Title = styled('h2', {
    fontSize: '$5',
    fontWeight: 'normal',
    margin: '$2 0',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: '0.5rem',

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
        // fontSize: '$4',
    },
    '@mobile': {
        fontSize: '22px',
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

export const ContentCard = styled('div', {
    '@desktop' : {
        display: 'flex',
        justifyContent: 'space-around',
        gap: '3rem',
        width: '100%',
    },

    '@tablet' : {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        width: '100%',
    },

    '@mobile' : {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '3rem',
        width: '100%',
    },

})

