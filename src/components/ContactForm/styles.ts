import { styled } from "@/styles"

export const FormWrapper = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    backgroundColor: '$gray100',
    borderRadius: '8px',
    maxWidth: '400px',
});

export const Label = styled('label', {
    fontSize: '$md',
    color: '$primary', // Use a cor secundária definida no tema
});

export const Input = styled('input', {
    padding: '8px 12px',
    fontSize: '$md',
    borderRadius: '4px',
    border: '1px solid $primary',
    backgroundColor: '$gray100',
    color: '$primary',

    '&:focus': {
        borderColor: '$primary',
        outline: 'none',
    }
});

export const Textarea = styled('textarea', {
    padding: '12px',
    fontSize: '$md',
    borderRadius: '4px',
    border: '1px solid $primary',
    backgroundColor: '$gray100',
    color: '$primary',
    minHeight: '120px',

    '&:focus': {
        borderColor: '$primary',
        outline: 'none',
    }
});
