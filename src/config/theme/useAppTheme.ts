import { useColorScheme } from 'react-native'

const darkTheme = {
  colors: {
    highlight: {
      primary: 'blue'
    },
    text: {
      inverse: 'white'
    },
    background: {
      default: 'black'
    }
  }
}

const lightTheme = {
  colors: {
    highlight: {
      primary: 'green'
    },
    text: {
      inverse: 'white'
    },
    background: {
      default: 'white'
    }
  }
}

export type AppTheme = typeof darkTheme

export const useAppTheme = (): AppTheme => {
  const scheme = useColorScheme()
  return scheme === 'dark' ? darkTheme : lightTheme
}
