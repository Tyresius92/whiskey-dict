import { css } from 'styled-components';

/**
 * normalize.css provides some common sense starting points, but the styles
 * below are ours, and specify the things that are specific to this design
 * library.
 */
export const ffReset = css`
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    /**
     * Ensure border is included inside of padding
     */
    box-sizing: border-box;
  }

  body * {
    -webkit-font-smoothing: antialiased;
  }

  p {
    margin: 0;
  }

  /**
   * Create a root stacking context
   * 
   * This is helpful for components like Modals, which are generally
   * inserted at the very bottom of the DOM
   */
  #root {
    /* root of the app, INSIDE body */
    isolation: isolate;
  }
`;
