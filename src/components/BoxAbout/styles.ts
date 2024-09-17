import {styled} from "@/styles";

interface BoxContainerProps {
    isServiceScreen?: boolean;
    children: React.ReactNode;
}

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


    },
)

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
    },
    {
        shouldForwardProp: (prop: string) => prop !== 'isServiceScreen'
    }
);

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
        bottom: -12,
        width: '117px', // Largura da linha
        height: '2px', // Altura da linha
        backgroundColor: '$highlight',
    },

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

    }, {
        shouldForwardProp: (prop: string) => prop !== 'isServiceScreen'
    }
)


export const BoxText = styled('div', {
    color: '$primary',
    fontSize: '18px',
    marginTop: '3rem',

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