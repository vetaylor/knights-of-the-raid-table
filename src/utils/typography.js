import Typography from "typography"
import GoogleFont from 'react-typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.4,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Vesper Libre',
      styles: ['400', '700', '900',],
    },
    {
      name: 'Roboto',
      styles: ['400',],
    },
  ],
  headerFontFamily: ["Vesper libre", "serif",],
  bodyFontFamily: ["Roboto", "san-serif",],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
