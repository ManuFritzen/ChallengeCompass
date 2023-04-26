import 'styled-components';

import Colors from '../theme';
type themeType = typeof Colors;

declare module 'styled-components' {
    export interface DefaultTheme extends themeType{}
}