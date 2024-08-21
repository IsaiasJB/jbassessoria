import {styled} from "@/styles";

export const BoxContainer = styled('div', {
    display: 'flex',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
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
    position: 'relative',
    paddingBottom: '0.5rem',
});

export const BoxText = styled('div', {
    color: '$primary',
    'p': {
        marginBottom: '$3',
    },

    '@tablet': {
        textAlign: 'justify',
    },

    '@mobile': {
        textAlign: 'justify',
    }

});

export const BoxImage = styled('div', {
    width: '100%',
    '@mobile': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    '@tablet': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});