import {styled} from "@/styles"

export const FormWrapper = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px',
    backgroundColor: '$gray100',
    borderRadius: '8px',
    maxWidth: '400px',
});

export const Label = styled('label', {
    fontSize: '$3',
    color: '$primary',
});

export const Input = styled('input', {
    padding: '10px',
    width: '300px',
    height: '40px',
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
    minHeight: '150px',

    '&:focus': {
        borderColor: '$primary',
        outline: 'none',
    }
});
