import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
    },
    body: {
        backgroundColor: '$secondary',
        color: '$primary',
        '--webkit-font-smoothing': 'antialiased',
    },
    'html, body': { fontFamily: '"Libre Baskerville", serif' },

    // Bloqueio de landscape apenas para mobile e tablet
    '@media (max-width: 1024px) and (orientation: landscape)': {
        '#root': {
            display: 'none', // Esconde o conteúdo principal no modo landscape
        },
        '.landscape-block': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '$primary',
            color: '$highlight',
            fontSize: '$5',
        },
    },

    // Quando a orientação é portrait, mostra o conteúdo novamente
    '@media (max-width: 1025px) and (orientation: portrait)': {
        '#root': {
            display: 'block', // Mostra o conteúdo no modo portrait
        },
        '.landscape-block': {
            display: 'none', // Esconde o aviso
        },
    },

    // Quando a orientação é portrait, mostra o conteúdo novamente
    '@media (min-width: 1025px) and (orientation: landscape)': {
        '#root': {
            display: 'block', // Mostra o conteúdo no modo portrait
        },
        '.landscape-block': {
            display: 'none', // Esconde o aviso
        },
    },
})