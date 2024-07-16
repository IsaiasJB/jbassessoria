import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },
    body: {
        backgroundColor: '$secondary',
        fontFamily: 'LibreBaskerville, open sans',
        fontWeight: '400',
        '--webkit-font-smoothing': 'antialiased',
    },

    'body, input, nutton, textarea, select,': {
        fontWeight: '400',
    }
})