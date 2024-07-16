import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    minHeight: '100vh',
})

export const Header = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1200,
    alignItems: 'center',
    padding: '2rem 9.375rem',
    width: '100%',
    margin: '0 auto',
})

export const Menu = styled('ul', {
    display: 'flex',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    gap: '1rem',

    li: {
        cursor: 'pointer',
    },

    a: {
        color: '$primary',
        textDecoration: 'none',
    },

})

