import { useColorScheme } from 'react-native'

const darkTheme = {
  colors: {
    highlight: {
      primary: 'blue'
    },
    text: {
      inverse: 'white'
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
    }
  }
}

export const useAppTheme = () => {
  const scheme = useColorScheme()
  return scheme === 'dark' ? darkTheme : lightTheme
}
