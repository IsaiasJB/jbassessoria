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
        space: {
            1: '4px',
            2: '8px',
            3: '16px',
            4: '24px',
        },
        fontSizes: {
            1: '12px',
            2: '14px',
            3: '16px',
            4: '18px',
            5: '24px',
        },
        radii: {
            1: '4px',
            2: '8px',
        },
    },
    media: {
        mobile: '(max-width: 680px)',
        tablet: '(min-width: 681px) and (max-width: 1023px)',
        desktop: '(min-width: 1024px)',
    },
})