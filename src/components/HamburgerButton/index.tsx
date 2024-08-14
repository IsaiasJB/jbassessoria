import {HamburgerButtonContainer} from "@/components/HamburgerButton/styles";

interface HamburgerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    open: boolean;
}
export function HamburgerButton({open, children, ...props}: HamburgerButtonProps) {
    return (
        <HamburgerButtonContainer {...props} className={open ? 'open' : ''} >
            {children}
        </HamburgerButtonContainer>
    )
}