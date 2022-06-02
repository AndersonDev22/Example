import * as Styled from './styles';

export type FooterProps = {
  children: string;
};

export const Footer = ({ children }: FooterProps) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};
