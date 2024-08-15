import { styled } from "@/styles";

export const BoxContainer = styled('div', {
    display: 'grid',
    gridAutoRows: '100%',
    gap: '20px',
    padding: '20px',

    '@desktop': {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },

    '@tablet': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    '@mobile': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export const BoxTitle = styled('h2', {
    fontSize: '$5',
    fontWeight: 'normal',
    display: 'flex',
    position: 'relative',
    paddingBottom: '0.5rem',

    '&::after': {
        content: '',
        position: 'absolute',
        left: 0,
        bottom: 160,
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

export const BoxText = styled('div', {
    color: '$primary',
});

export const BoxImage = styled('div', {
    '@mobile': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});