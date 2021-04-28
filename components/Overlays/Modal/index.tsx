import * as React from 'react';

import { useClickOutside } from '@hooks';

import { Container } from '@components/Layouts';
import { Text } from '@components/DataDisplay';

import { StyledModalContainer, StyledModal, StyledModalProps } from './style';

interface ModalProps extends Partial<StyledModalProps> {
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
  style?: React.CSSProperties;
}

const Modal = ({
  children,
  title,
  onClose,
  style = {},
  size = 'medium',
}: ModalProps): JSX.Element => {
  const ref = useClickOutside<HTMLDivElement>(() => onClose());

  return (
    <Container>
      <StyledModalContainer>
        <StyledModal ref={ref} style={style} size={size}>
          <Container>
            {title && (
              <Container>
                <Text align="center" variant="h3">
                  {title}
                </Text>
              </Container>
            )}
            {children}
          </Container>
        </StyledModal>
      </StyledModalContainer>
    </Container>
  );
};

export default Modal;
