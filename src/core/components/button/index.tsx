import { View, Text } from 'react-native'
import styled from 'styled-components/native'

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps = {
    onPress: () => void
    label: string
    variant: ButtonVariant
}

export const Button = ({onPress, label, variant}: ButtonProps) => {

    const StyledButton = styled.TouchableOpacity`
      background-color: ${({ theme }) => theme.colors[variant]};
    `

    return (
      <StyledButton onPress={onPress}>
        <Text>{label}</Text>
      </StyledButton>
    )
}
