import { Container } from './styles';

type ButtonProps = {
  type?: 'button-solid' | 'button-border';
  textButton: string;
};

export function Button({ type, textButton }: ButtonProps) {
  return <Container className={type}>{textButton}</Container>;
}
