import React from 'react';
import { StyledButton } from './styles';


type ButtonProps = React.ComponentProps<typeof StyledButton> & {
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    label?: string
    hideLabelOnMobile?: boolean
};
export function Button({  icon, iconPosition, label, hideLabelOnMobile = false, ...props }: ButtonProps) {
    return (
        <StyledButton {...props} iconPosition={iconPosition} hideLabelOnMobile={hideLabelOnMobile ? 'true' : 'false'} >
            {icon && <span>{icon}</span>}
            <p>{label}</p>
        </StyledButton>
    )
}