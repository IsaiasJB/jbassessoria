import {styled} from "@/styles";

export const BoxContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    },


});

export const ContentWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',

    variants: {
        isServiceScreen: {
            true: {
                flexDirection: 'column', // Coloca o título acima do texto
                textAlign: 'left',
                '@mobile': {
                    textAlign: 'center',
                },
            },
            false: {
                flexDirection: 'column', // Manter em coluna se não for tela de serviços
                textAlign: 'left',
            },
        },
    },
});

export const BoxTitle = styled('h2', {
    fontSize: '$5',
    fontWeight: 'normal',
    display: 'flex',
    position: 'relative',
    paddingBottom: '0.5rem',

    variants: {
        isServiceScreen: {
            true: {
                fontSize: '30px',
                fontWeight: 'bold',
                color: '$primary',
                marginBottom: '20px',
                '@mobile': {
                    fontSize: '25px',
                },
            },
            false: {
                fontSize: '$5',
            },
        },
    },

});

export const BoxText = styled('div', {
    color: '$primary',
    fontSize: '18px',
    'p': {
        marginBottom: '$3',
    },

    '@tablet': {
        textAlign: 'justify',
    },

    '@mobile': {
        textAlign: 'justify',
        fontSize: '16px',
    }

});

export const BoxImage = styled('div', {
    width: '100%',
    '@mobile': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    '@tablet': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});