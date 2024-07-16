import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },
    body: {
        backgroundColor: '$highlight',
        '--webkit-font-smoothing': 'antialiased',
    },

    'body, input, nutton, textarea, select,': {
        fontWeight: '400',
    }
})