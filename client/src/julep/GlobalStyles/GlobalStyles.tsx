import { createGlobalStyle } from 'styled-components';
import { ffReset } from './ffReset';
import { normalizeCSS } from './normalizeCSS';
import { theme } from './theme';

/*
 * Set up the icon library here so that it is available by
 * default to any application that uses the GlobalStyles component
 * (which should be all of them)
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, fab, far);

export const GlobalStyles = createGlobalStyle`
  ${normalizeCSS}
  ${ffReset}
  ${theme}
`;
