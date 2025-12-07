export const breakpoints = {
  mobileSm: '375px',
  mobile: '425px',
  tablet: '768px',
  desktop: '1024px',
  large: '1200px',
}

export const media = {
  mobileSm: `@media (max-width: ${breakpoints.mobileSm})`,
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
  large: `@media (max-width: ${breakpoints.large})`,
}

export type Breakpoints = typeof breakpoints
export type Media = typeof media
