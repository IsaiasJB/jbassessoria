import { styled } from "../styles";

const Button = styled('button', {
  backgroundColor: '$primary',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  fontSize: '14px',
  padding: '4px 8px',
  width: '50%',
})

export default function Home() {
  return (
    <Button>TESTE</Button>
  );
}
