import { styled } from "@/styles"


export const Container = styled('header', {
    display: 'flex',
    alignItems: 'center',
    padding: '2rem 9.375rem',
    width: '100%',



    '@desktop': {
        justifyContent: 'space-between',
    },

    '@tablet': {
        justifyContent: 'space-around',
    },

    '@mobile': {
        padding: '2rem 1.375rem',
    }
})

export const HeaderContent = styled('div', {
    display: 'flex',
    gap: '1rem',
    textAlign: 'center',

    '@desktop': {
        width: '21%',
    },

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

export const DropdownMenu = styled('ul', {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    position: 'absolute',
    top: '95px',
    right: '160px',
    textAlign: 'right',
    backgroundColor: '$primary',
    borderRadius: '8px',
    border: '2px solid $highlight',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    padding: '10px',

    '@mobile' : {
        right: '10px',
    },

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

