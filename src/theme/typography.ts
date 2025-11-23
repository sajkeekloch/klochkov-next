export const typography = {
  fonts: {
    primary: "'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Consolas', monospace",
    code: "'Courier New', monospace",
  },
  fontSizes: {
    xs: '12px',
    sm: '13px',
    md: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '50px',
    '5xl': '80px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.6,
    relaxed: 1.7,
  },
}

export type Typography = typeof typography
