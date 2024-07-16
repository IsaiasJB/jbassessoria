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
})