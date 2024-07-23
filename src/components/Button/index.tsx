import React from 'react';
import { StyledButton } from './styles';


type ButtonProps = React.ComponentProps<typeof StyledButton> & {
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    label: string
};
export function Button({  icon, iconPosition, label, ...props }: ButtonProps) {
    return (
        <StyledButton {...props} iconPosition={iconPosition}>
            {icon && <span>{icon}</span>}
            {label}
        </StyledButton>
    )
}