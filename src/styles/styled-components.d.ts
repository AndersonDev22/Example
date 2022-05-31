import { theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  //eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {} //fazendo o meu funcionar junto com o tema do styled-components
}
