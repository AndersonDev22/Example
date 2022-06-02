import * as Styled from './styles';

export type ButtonProps = {
  children: string;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};
