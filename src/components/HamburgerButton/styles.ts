import {styled} from "@/styles";

export const HamburgerButtonContainer = styled('button', {
    background: '$primary',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3rem',
    height: '3rem',
    borderRadius: '0.5rem',
    padding: '$1 $2',

    '@desktop': {
        display: 'none',
    },

    '@tablet': {
        display: 'flex',
    },

    '@mobile': {
        display: 'flex',
    },
});