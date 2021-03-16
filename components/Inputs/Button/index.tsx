import React from 'react';

import { Text } from '@components/DataDisplay';
import { Container } from '@components/Layouts';

import { StyledButton, StyledButtonProps, ButtonVariant } from './style';

interface ButtonProps extends Partial<Omit<StyledButtonProps, 'variant'>> {
  children: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  onClick?: () => void;
}

const Button = ({
  children,
  size,
  variant = 'primary',
  thickness = 'medium',
  disabled = false,
  gap = 3,
  onClick = (): void => {},
  backgroundColor = "#000",
  borderColor = "#000"
}: ButtonProps): JSX.Element => {
  return (
    <Container gap={gap} flex={size ? 0 : 1}>
      <StyledButton
        variant={disabled ? 'disabled' : variant}
        size={size ?? 'medium'}
        thickness={thickness}
        onClick={(!disabled && onClick) || ((): void => {})}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      >
        <Text variant="small" weight={500}>
          {children}
        </Text>
      </StyledButton>
    </Container>
  );
};

export default Button;
