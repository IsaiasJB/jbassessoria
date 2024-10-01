import { styled } from "@/styles";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    minHeight: '100vh',
})

export const Content = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '2rem 9.375rem',
    flexDirection: 'column',
    width: '100%',

    '@tablet': {
        padding: '2rem 5rem',
    },

    '@mobile': {
        padding: '2rem 3rem',
    }
})

export const ContentTitle = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',

    '@tablet': {
        // padding: '2rem 5rem',
    },

    '@mobile': {
        width: '100%',
    }
})

export const Title = styled('h2', {
    fontSize: '30px',
    fontWeight: 'normal',
    display: 'flex',

    '@mobile': {
        fontSize: '$5',
    }

})

export const ContentBox = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    width: '100%',

    '@tablet': {
    },

    '@mobile': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    }
})

export const Box = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '100%',
    textAlign: 'start',
    margin: '0.5rem',

    '@tablet': {
        fontSize: '14px',
        'h2': {
            fontSize: '20px',
        },
    },

    '@mobile': {
        fontSize: '13px',
        'h2': {
            fontSize: '20px',
            marginBottom: '10px'
        },
    },

    'h2': {
        marginBottom: '10px'
    },
    'a': {
        textDecoration: 'none',
        color: '$primary',
    },
})

