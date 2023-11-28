import { View, Text } from 'react-native'
import styled from 'styled-components/native'

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps = {
  onPress: () => void
  label: string
  variant: ButtonVariant
}

export const Button = ({ onPress, label, variant }: ButtonProps) => {
  const StyledButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.highlight[variant]};
  `

  const StyledText = styled.Text`
    color: ${({ theme }) => theme.colors.text.inverse};
  `

  return (
    <StyledButton onPress={onPress}>
      <StyledText>{label}</StyledText>
    </StyledButton>
  )
}
