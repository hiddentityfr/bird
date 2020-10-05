import React from 'react';

import { Container, Spacer } from '@components/Layouts';
import { Text } from '@components/DataDisplay';

import { theme } from '@utils';
import { StyledAvatarProps, StyledAvatar } from './style';

interface AvatarProps extends Partial<StyledAvatarProps> {
  src?: string;
  username?: string;
  label?: string;
  labelLocation?: 'left' | 'right' | 'top' | 'bottom';
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const Avatar = ({
  src,
  username = 'Avatar',
  size = 50,
  rounded = true,
  align = 'center',
  backgroundColor = src ? 'transparent' : theme.cvar('colorForeground'),
  label,
  labelLocation = 'bottom',
  gap = 3,
}: AvatarProps): JSX.Element => {
  return (
    <Container
      align="center"
      row={labelLocation === 'left' || labelLocation === 'right'}
      reverse={labelLocation === 'left' || labelLocation === 'top'}
      gap={gap}
    >
      <StyledAvatar
        size={size}
        rounded={rounded}
        align={align}
        backgroundColor={backgroundColor}
      >
        {src ? (
          <img src={src} alt={username} />
        ) : (
          <Container gap={0}>
            <Text
              variant="small"
              weight="normal"
              align="center"
              color={theme.cvar('colorBackground')}
              size={`${Math.round(size * 0.5)}px`}
            >
              {username[0].toUpperCase()}
            </Text>
          </Container>
        )}
      </StyledAvatar>
      {label && (
        <>
          <Spacer size={1} />
          <Text variant="p">{label}</Text>
        </>
      )}
    </Container>
  );
};

export default Avatar;
