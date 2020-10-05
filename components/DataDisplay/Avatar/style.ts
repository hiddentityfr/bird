import styled from 'styled-components';

import { FlexContent } from '@types';

export interface StyledAvatarProps {
  size: number;
  rounded: boolean;
  align: FlexContent;
  backgroundColor: string;
}

export const StyledAvatar = styled.div<StyledAvatarProps>`
  display: flex;
  align-items: ${({ align }): string => align};
  height: ${({ size }): number => size}px;
  width: ${({ size }): number => size}px;
  border-radius: ${({ rounded }): string | number => (rounded ? '50%' : 0)};
  background-color: ${({ backgroundColor }): string => backgroundColor};
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
