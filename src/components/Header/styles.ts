import { styled } from "@/styles"


export const Container = styled('header', {
    display: 'flex',
    maxWidth: '100%',
    alignItems: 'center',
    padding: '2rem 9.375rem',
    width: '100%',

    '@desktop': {
        justifyContent: 'space-between',
    },

    '@tablet': {
        justifyContent: 'space-around',
    }
})

export const HeaderContent = styled('div', {
    display: 'flex',
    gap: '1rem',

    '@mobile': {
        marginLeft: '3rem'
    }
})

export const Menu = styled('ul', {
    display: 'flex',
    width: '100%',
    fontSize: 'px',
    justifyContent: 'center',
    gap: '3.313rem',
    listStyle: 'none',
    padding: '1rem',
    margin: '0',

    '@desktop': {
        display: 'flex',
    },

    '@tablet': {
        display: 'none',
    },

    '@mobile': {
        display: 'none',
    },


})

export const Link = styled('li', {
    cursor: 'pointer',

    a: {
        color: '$primary',
        textDecoration: 'none',
    },

    variants: {
        isActive: {
            true: {
                a: {
                    backgroundColor: '$primary',
                    color: '$highlight',
                    fontWeight: 'bold',
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    textDecoration: 'none',
                }

            }
        }
    }
})

export const HamburgerButton = styled('button', {
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

export const DropdownMenu = styled('ul', {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    position: 'absolute',
    top: '90px',
    right: '200px',
    textAlign: 'right',
    backgroundColor: '$primary',
    borderRadius: '8px',
    border: '2px solid $highlight',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    padding: '10px',

    '& a': {
        padding: '$2 $4',
        textDecoration: 'none',
        color: '$highlight',
        cursor: 'pointer',
    },

    variants: {
        open: {
            true: {
                display: 'block',
            },
            false: {
                display: 'none',
            },
        },
    },
});

