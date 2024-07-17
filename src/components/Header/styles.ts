import { styled } from "@/styles"


export const Container = styled('header', {
    display: 'flex',
    maxWidth: '100%',
    alignItems: 'center',
    padding: '2rem 9.375rem',
    width: '100%',

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

