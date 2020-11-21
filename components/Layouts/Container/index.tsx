import React, { CSSProperties, ReactNode } from 'react';

import { StyledContainer, StyledContainerProps } from './style';

interface ContainerProps extends Partial<StyledContainerProps> {
  children: ReactNode;
  style?: CSSProperties;
}

const Container = ({
  children,
  flex = 'auto',
  row = false,
  reverse = false,
  noWrap = false,
  justify = 'flex-start',
  align = row ? 'center' : 'stretch',
  bg = 'transparent',
  style,
  gap = 3,
}: ContainerProps): JSX.Element => {
  return (
    <StyledContainer
      style={style}
      bg={bg}
      flex={flex}
      row={row}
      reverse={reverse}
      noWrap={noWrap}
      justify={justify}
      align={align}
      gap={gap}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
