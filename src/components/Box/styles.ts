import { styled } from "@/styles";

export const BoxContainer = styled('div', {
    display: 'grid',
    gridAutoRows: '100%',
    gap: '20px',
    padding: '20px',

    '@desktop': {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },

    '@tablet': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    '@mobile': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export const BoxTitle = styled('h2', {
    fontSize: '$5',
    fontWeight: 'normal',
    display: 'flex',

});

export const BoxText = styled('div', {
    color: '$primary',
});

export const BoxImage = styled('div', {

});