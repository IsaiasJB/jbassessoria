import { styled } from "@/styles";

export const LineSeparator = styled('div', {
    backgroundColor: '#BCBCBC',
    padding: '1px',
    margin: '1rem auto',
    variants: {
        width: {
            small: { width: '25%' },
            medium: { width: '50%' },
            large: { width: '75%' },
            full: { width: '100%' },
        },
    },
    defaultVariants: {
        width: 'full',
    },
});