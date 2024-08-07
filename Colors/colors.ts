import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Disable warning about Reach's CSS */
    --reach-dialog: 1;
    
    /* Colors */
    --dark-text: hsl(0, 2%, 8%);
    --palette-primary-peach-60: hsl(18, 100%, 78%);
    --peach-light: hsl(18, 100%, 90%);
    --palette-background-grey: hsl(240, 9%, 98%);
    --palette-background-alert-error: hsl(0, 100%, 99%);
    --palette-alert-success: hsl(176, 71%, 29%);
    --palette-background-alert-success: hsl(175, 58%, 96%);
    --palette-background-alert-info: hsl(218, 100%, 98%);
    --palette-font-grey: hsl(280, 1%, 45%);
    --palette-font-white: hsl(0, 0%, 100%);
    --link: hsl(206, 72%, 35%);
    --icon-success: hsl(158, 100%, 23%);
    --text-subtle: hsl(40, 3%, 23%);
    --text-subtlest: hsl(16, 6%, 36%);
    --palette-primary-onyx-100: hsl(270, 4%, 21%);
    --palette-primary-dark: hsl(0, 0%, 0.11%);
    --palette-secondary-teal-50: hsl(176, 56%, 58%);
    --palette-secondary-teal-20: hsl(176, 44%, 86%);
    --palette-alert-info: hsl(206, 71%, 44%);
    --palette-alert-warning: hsl(42, 100%, 46%);
    --palette-alert-error: hsl(356, 71%, 44%);
    --palette-background-alert-warning: hsl(48, 100%, 94%);
    --palette-peach-100: hsl(18, 28%, 37%);
    --palette-peach-90: hsl(18, 30%, 51%);
    --palette-peach-80: hsl(18, 46%, 62%);
    --palette-peach-70: hsl(18, 67%, 70%);
    --palette-peach-50: hsl(18, 100%, 83%);
    --palette-peach-40: hsl(18, 100%, 87%);
    --palette-peach-20: hsl(19, 100%, 94%);
    --palette-peach-10: hsl(19, 100%, 97%);
    --palette-onyx-100: hsl(270, 4%, 21%);
    --palette-onyx-80: hsl(260, 2%, 37%);
    --palette-onyx-60: hsl(270, 1%, 53%);
    --palette-onyx-50: hsl(270, 1%, 60%);
    --palette-onyx-40: hsl(270, 1%, 68%);
    --palette-onyx-30: hsl(240, 1%, 76%);
    --palette-onyx-20: hsl(0, 0%, 91%);
    --palette-onyx-10: hsl(0, 0%, 97%);
    --palette-teal-100: hsl(175, 72%, 21%);
    --palette-teal-70: hsl(176, 71%, 40%);
    --palette-teal-60: hsl(176, 71%, 44%);
    --palette-teal-40: hsl(176, 55%, 69%);
    --palette-teal-30: hsl(176, 55%, 78%);
    --palette-teal-10: hsl(177, 54%, 93%);
    --palette-lapis-lazuli-100: hsl(206, 71%, 20%);
    --palette-lapis-lazuli-90: hsl(206, 71%, 28%);
    --palette-lapis-lazuli-50: hsl(206, 56%, 59%);
    --palette-lapis-lazuli-40: hsl(206, 55%, 70%);
    --palette-lapis-lazuli-30: hsl(206, 55%, 79%);
    --palette-lapis-lazuli-20: hsl(206, 55%, 87%);
    --palette-ruby-100: hsl(356, 71%, 20%);
    --palette-ruby-90: hsl(356, 71%, 28%);
    --palette-ruby-80: hsl(356, 71%, 35%);
    --palette-ruby-70: hsl(356, 71%, 40%);
    --palette-ruby-50: hsl(356, 56%, 64%);
    --palette-ruby-40: hsl(356, 56%, 74%);
    --palette-ruby-30: hsl(356, 56%, 82%);
    --palette-ruby-20: hsl(356, 54%, 89%);
    --palette-marigold-100: hsl(34, 100%, 22%);
    --palette-marigold-90: hsl(36, 100%, 26%);
    --palette-marigold-80: hsl(38, 100%, 33%);
    --palette-marigold-70: hsl(39, 100%, 39%);
    --palette-marigold-50: hsl(44, 87%, 59%);
    --palette-marigold-40: hsl(46, 91%, 68%);
    --palette-marigold-30: hsl(48, 94%, 79%);
    --palette-marigold-20: hsl(49, 93%, 89%);
    --palette-font-silver: hsl(0, 0%, 75%);
    --palette-icon-grey: hsl(214, 10%, 45%);
    --borders-divider: #dedede;

    /* Didn't see this on Zep */
    --button-disabled:  hsl(213, 6%, 72%);

    /* Box Shadows */
    --box-shadow-1: 0 2px 4px 0 hsla(263, 12%, 21%, 0.13);
    --box-shadow-2: 0 4px 8px 0 hsla(263, 12%, 21%, 0.13);
    --box-shadow-3: 0 6px 12px 0 hsla(263, 12%, 21%, 0.13);
    --box-shadow-4: 0 8px 16px 0 hsla(267, 20%, 20%, 0.13);
    --box-shadow-5: 0 8px 16px 0 hsla(267, 20%, 20%, 0.40);
    
    /* Spacing */
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 12px;
    --spacing-4: 16px;
    --spacing-5: 24px;
    --spacing-6: 32px;
    --spacing-7: 40px;
    --spacing-8: 48px;
    --spacing-9: 56px;
    --spacing-10: 64px;
    --spacing-11: 72px;
    --spacing-12: 80px;
    --spacing-13: 88px;
    --spacing-14: 120px;
    --spacing-15: 166px;

    /* Font*/
    --base-font-size: 16px;
    
    --font-weight-regular: 400;
    --font-weight-semi: 600;
    --font-weight-bold: 700;
  }

  @media (max-width: 900px) {
    --base-font-size: 14px;
  }

  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 
    http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Satoshi', 'Montserrat', 'DejaVu Sans', Verdana, sans-serif;
    font-size: var(---base-font-size);
    vertical-align: baseline;
    text-decoration: none;

  }
  a:not([class]), a:visited:not([class])  {
    color: var(--link);
    text-decoration: none;
    border-bottom: 1px solid var(--link);
  }
  
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Satoshi', 'Montserrat', 'DejaVu Sans', Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  #__next {
    /*
      Avoid using z-index and create a stacking context.
      Helps make sure portals float above the app.
    */
    isolation: isolate;
  }

  html, body, #__next {
    /*
      If this is enabled, framer-motion useViewportScroll will not work as
      intended. Maybe figure out how to not use framer-motion at all then.
    */
    /* height: 100%; */
  }

  body {
    overflow-anchor: none;
    color: var(--dark-text);
  }
`;

export default GlobalStyle;
