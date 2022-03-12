import { css } from 'styled-components';

export const theme = css`
  /* root of the whole DOM */
  :root {
    /* CSS HSL */
    --russet: hsl(28, 62%, 31%, 1);
    --prussian-blue: hsl(211, 67%, 21%, 1);
    --dark-purple: hsl(308, 100%, 13%, 1);
    --white: hsl(0, 0%, 100%, 1);
    --lemon-meringue: hsl(46, 70%, 86%, 1);
    --yellow-green-color-wheel: hsl(112, 51%, 45%, 1);
    --dark-orange: hsl(33, 100%, 51%, 1);
    --red-ryb: hsl(8, 91%, 53%, 1);
    --cerulean-crayola: hsl(193, 88%, 47%, 1);
    --mikado-yellow: hsl(44, 100%, 56%, 1);

    /* primary/secondary colors */
    --color-primary-lightest: #d8955a;
    --color-primary-light: #c6752f;
    --color-primary-main: #7e4b1e;
    --color-primary-dark: #533113;
    --color-secondary-lightest: #5597dd;
    --color-secondary-light: #256ebb;
    --color-secondary-main: #12355b;
    --color-secondary-dark: #0d2844;

    /* blacks, whites, and grays */
    --color-white: #ffffff;
    --color-gray-100: #1b1b1b;
    --color-gray-200: #303030;
    --color-gray-300: #474747;
    --color-gray-400: #5e5e5e;
    --color-gray-500: #777777;
    --color-gray-600: #919191;
    --color-gray-700: #ababab;
    --color-gray-800: #c6c6c6;
    --color-gray-900: #e2e2e2;
    --color-black: #000000;

    /* oranges */
    --color-orange-100: hsl(33, 11%, 51%, 1);
    --color-orange-200: hsl(33, 22%, 51%, 1);
    --color-orange-300: hsl(33, 33%, 51%, 1);
    --color-orange-400: hsl(33, 44%, 51%, 1);
    --color-orange-500: hsl(33, 55%, 51%, 1);
    --color-orange-600: hsl(33, 66%, 51%, 1);
    --color-orange-700: hsl(33, 77%, 51%, 1);
    --color-orange-800: hsl(33, 88%, 51%, 1);
    --color-orange-900: hsl(33, 100%, 51%, 1); // warning

    /* yellows */
    --color-yellow-100: hsl(44, 11%, 56%, 1);
    --color-yellow-200: hsl(44, 22%, 56%, 1);
    --color-yellow-300: hsl(44, 33%, 56%, 1);
    --color-yellow-400: hsl(44, 44%, 56%, 1);
    --color-yellow-500: hsl(44, 55%, 56%, 1);
    --color-yellow-600: hsl(44, 66%, 56%, 1);
    --color-yellow-700: hsl(44, 77%, 56%, 1);
    --color-yellow-800: hsl(44, 88%, 56%, 1);
    --color-yellow-900: hsl(44, 100%, 56%, 1); // caution

    /* reds */
    --color-red-100: hsl(8, 11%, 53%, 1);
    --color-red-200: hsl(8, 22%, 53%, 1);
    --color-red-300: hsl(8, 33%, 53%, 1);
    --color-red-400: hsl(8, 44%, 53%, 1);
    --color-red-500: hsl(8, 55%, 53%, 1);
    --color-red-600: hsl(8, 66%, 53%, 1); // error???
    --color-red-700: hsl(8, 77%, 53%, 1);
    --color-red-800: hsl(8, 88%, 53%, 1); // danger
    --color-red-900: hsl(8, 100%, 53%, 1);

    /* greens */
    --color-green-100: hsl(112, 11%, 45%, 1);
    --color-green-200: hsl(112, 22%, 45%, 1);
    --color-green-300: hsl(112, 33%, 45%, 1);
    --color-green-400: hsl(112, 44%, 45%, 1);
    --color-green-500: hsl(112, 55%, 45%, 1); // success
    --color-green-600: hsl(112, 66%, 45%, 1);
    --color-green-700: hsl(112, 77%, 45%, 1);
    --color-green-800: hsl(112, 88%, 45%, 1);
    --color-green-900: hsl(112, 99%, 45%, 1);

    /* blues */
    --color-blue-100: hsl(193, 11%, 47%, 1);
    --color-blue-200: hsl(193, 22%, 47%, 1);
    --color-blue-300: hsl(193, 33%, 47%, 1);
    --color-blue-400: hsl(193, 44%, 47%, 1);
    --color-blue-500: hsl(193, 55%, 47%, 1);
    --color-blue-600: hsl(193, 66%, 47%, 1);
    --color-blue-700: hsl(193, 77%, 47%, 1);
    --color-blue-800: hsl(193, 88%, 47%, 1);
    --color-blue-900: hsl(193, 100%, 47%, 1);

    /* intention aliases */
    --color-success: var(--color-green-600);
    --color-info: var(--color-blue-300);
    --color-caution: var(--color-yellow-500);
    --color-warning: var(--color-orange-500);
    --color-danger: var(--color-red-700);
    --color-error: var(--color-red-500);

    /* Sizing */
    --space-0: 0px;
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 16px;
    --space-4: 32px;
    --space-5: 64px;

    --font-size-0: 1rem;
    --font-size-1: 1.125rem;
    --font-size-2: 1.25rem;
    --font-size-3: 1.5rem;

    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;

    --border-radius-0: 0px;
    --border-radius-1: 2px;
    --border-radius-2: 4px;
    --border-radius-3: 8px;
    --border-radius-4: 16px;

    /* Animation timings */
    --animation-time-appear: 250ms;
    --animation-time-disappear: 150ms;
  }
`;
