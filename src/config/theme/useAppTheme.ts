import { useColorScheme } from 'react-native'


const darkTheme = {
  colors: {
    primary: 'blue',
    secondary: 'green'
  }
}

const lightTheme = {
  colors: {
    primary: 'red',
    secondary: 'brown'
  }
}

export const useAppTheme = () => {
  const scheme = useColorScheme()
  return scheme === 'dark' ? darkTheme : lightTheme
}
