import {styled} from '@/styles';


export const StyledButton = styled('button', {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '$1 $2',
    width: 'auto',
    height: '3rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    lineHeight: 0,

    // Variantes
    variants: {
        color: {
            primary: {
                backgroundColor: '$primary',
                color: '$highlight',
                // '&:hover': {
                //     backgroundColor: '#005bb5',
                // },
            },
            secondary: {
                backgroundColor: '$highlight',
                color: '$primary',
                // '&:hover': {
                //     backgroundColor: '#c60055',
                // },
            },
            transparent: {
                backgroundColor: 'transparent',
                color: '$white',
                border: '1px solid',
                // '&:hover': {
                //     backgroundColor: '#7e7e7e',
                // },
            },
        },
        size: {
            small: {
                fontSize: '$1',
                padding: '$1',
            },
            medium: {
                fontSize: '$2',
                padding: '$2',
            },
            large: {
                fontSize: '$3',
                padding: '$3',
            },
        },
        iconPosition: {
            left: {
                flexDirection: 'row',
            },
            right: {
                flexDirection: 'row-reverse',
            },
        },
        hideLabelOnMobile: {
            true: {},
            false: {},
        },
    },

    compoundVariants: [
        {
            hideLabelOnMobile: true,
            css: {
                '@tablet': {
                    '& p': {
                        display: 'none',
                    },
                },
                '@mobile': {
                    '& p': {
                        display: 'none',
                    },
                },
            },
        },
    ],

    defaultVariants: {
        color: 'primary',
        size: 'medium',
        hideLabelOnMobile: 'false',
    },
});

export const TextButton = styled('p', {
    fontSize: '$3'
})
