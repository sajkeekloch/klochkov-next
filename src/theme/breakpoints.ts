export const breakpoints = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1024px',
  large: '1200px',
}

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
  large: `@media (max-width: ${breakpoints.large})`,
}

export type Breakpoints = typeof breakpoints
export type Media = typeof media
