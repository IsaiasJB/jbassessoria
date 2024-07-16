import { LineSeparator } from './styles'

type SeparatorComponentProps = {
    width?: 'small' | 'medium' | 'large' | 'full';
};

export function Separator({ width = 'full' }: SeparatorComponentProps) {
    return <LineSeparator width={width} />
}