import { LineSeparator } from './styles'

type SeparatorComponentProps = {
    width?: 'small' | 'medium' | 'large' | 'full';
};

export function Seperator({ width = 'full' }: SeparatorComponentProps) {
    return <LineSeparator width={width} />
}