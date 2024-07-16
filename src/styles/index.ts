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
            secondary: '#97D5EB',
            highlight: '#D9D9D6',

        },
        fonts: {
            body: 'Arial, sans-serif',
        },
    }
})