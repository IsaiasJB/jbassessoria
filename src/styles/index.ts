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
        space: {
            1: '8px',
            2: '16px',
            3: '24px',
        },
        fontSizes: {
            1: '12px',
            2: '14px',
            3: '16px',
        },
        radii: {
            1: '4px',
            2: '8px',
        },
    }
})