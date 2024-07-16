import { createStitches } from '@stitches/react';

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            primary: '#0E1C2C',
            secondary: '#D9D9D6',
            highlight: '#97D5EB',

        },
        fonts: {
            body: 'Arial, sans-serif',
        },
    }
})