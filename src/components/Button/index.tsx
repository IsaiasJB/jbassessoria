import React from 'react';
import { StyledButton } from './styles';


type ButtonProps = React.ComponentProps<typeof StyledButton> & {
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
};
export function Button({ children, icon, iconPosition, ...props }: ButtonProps) {
    return (
        <StyledButton {...props} iconPosition={iconPosition}>
            {icon && <span>{icon}</span>}
            {children}
        </StyledButton>
    )
}