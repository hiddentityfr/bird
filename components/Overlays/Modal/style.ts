import styled from 'styled-components';

import { theme } from '@utils';

export const StyledModalContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(7px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface StyledModalProps {
  size: 'small' | 'medium' | 'large';
}

const sizeMapping = {
  small: '500px',
  medium: '750px',
  large: '1000px',
};

export const StyledModal = styled.div<StyledModalProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => sizeMapping[size]};
  margin: ${theme.cvar('layoutSpaceGap')};
  background-color: ${theme.cvar('colorBackground')};
  box-shadow: ${theme.cvar('shadowLarge')};
  border-radius: ${theme.cvar('layoutRadius')};
`;
