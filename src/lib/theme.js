import { extendTheme } from "@chakra-ui/react"

const globalStyles = {
  'html, body': {
    bg: '#1D1D1D',
  },
  '.swiper-slide:not(.swiper-slide-active)': {
    opacity: 0,
  },
  '.swiper-pagination-progressbar': {
    display: 'block',
    position: 'relative',
    width: '280px',
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

const components = {
  Button: {
    baseStyle: {
      rounded: 'full'
    },
    variants: {
      solid: {
        bgColor: '#E10856',
        _hover: {
          bgColor: '#BA104D',
        },
        _active: {
          bgColor: '#E10856',
        }
      },
      outline: {
        borderColor: '#E10856',
        _hover: {
          bgColor: 'rgba(44, 44, 44, 0.2)',
        }
      }
    }
  },
}

const theme = extendTheme({
  styles: {
    global: globalStyles,
  },
  components,
})

export default theme
  