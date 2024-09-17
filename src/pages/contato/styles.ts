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

export const ContentBox = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',

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
    fontSize: '$5',
    fontWeight: 'normal',
    display: 'flex',
    position: 'relative',
    paddingBottom: '0.5rem',
    margin: '0.5rem',

    '&::after': {
        content: '',
        position: 'absolute',
        left: 0,
        bottom: -12,
        width: '117px', // Largura da linha
        height: '2px', // Altura da linha
        backgroundColor: '$highlight',
    },

    '@mobile': {
        fontSize: '$4',
    }

})

export const Box = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '3rem',
    width: '100%',

    '@tablet': {
        padding: '2rem 5rem',
    },

    '@mobile': {
    }
})



export const BoxImage = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '2rem',
    borderRadius: '8px',

    '@mobile': {
        display: 'none',
    },
    '@tablet': {

    }
});