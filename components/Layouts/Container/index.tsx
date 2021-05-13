import React, { CSSProperties, ReactNode } from 'react';
import Head from 'next/head';

import { StyledContainer, StyledContainerProps } from './style';

interface ContainerProps extends Partial<StyledContainerProps> {
  children: ReactNode;
  style?: CSSProperties;
  title?: string;
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
  rounded = false,
  style,
  title,
  gap = 3,
}: ContainerProps): JSX.Element => {
  return (
    <StyledContainer
      style={style}
      bg={bg}
      rounded={rounded}
      flex={flex}
      row={row}
      reverse={reverse}
      noWrap={noWrap}
      justify={justify}
      align={align}
      gap={gap}
    >
      {title && (
        <Head>
          <title>{`${title} • hiddentity.fr`}</title>
        </Head>
      )}
      {children}
    </StyledContainer>
  );
};

export default Container;
