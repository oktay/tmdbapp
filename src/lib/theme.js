import { extendTheme } from "@chakra-ui/react"

const globalStyles = {
  '.swiper-slide:not(.swiper-slide-active)': {
    opacity: 0,
  },
  '.swiper-pagination-progressbar': {
    display: 'block',
    position: 'relative',
    width: '320px',
    height: '8px',
    background: 'hsla(0, 0%, 100%, 0.3)',
  },
  '.swiper-pagination-progressbar-fill': {
    display: 'block',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '8px',
    background: 'hsla(0, 0%, 100%, 1);',
    transformOrigin: 'left',
  }
}

const theme = extendTheme({
  styles: {
    global: globalStyles,
  }
})

export default theme
  