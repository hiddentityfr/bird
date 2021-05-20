import styled from 'styled-components';

import { theme } from '@utils';
import { FlexContent } from '@typings/FlexContent';

export interface StyledContainerProps {
  flex: number | string;
  row: boolean;
  reverse: boolean;
  noWrap: boolean;
  justify: FlexContent;
  align: FlexContent;
  bg: string;
  rounded: boolean;
  gap: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  // Layout
  display: flex;
  flex: ${({ flex }): string | number =>
    flex === 0 ? `${flex} 0 auto` : flex};
  flex-direction: ${({ row, reverse }): string =>
    `${row ? 'row' : 'column'}${reverse ? '-reverse' : ''}`};
  flex-wrap: ${({ noWrap }): string => (noWrap ? 'nowrap' : 'wrap')};
  justify-content: ${({ justify }): string => justify};
  align-items: ${({ align }): string => align};
  margin: calc(${theme.cvar('layoutSpace')} * ${({ gap }): number => gap});

  // Style
  background-color: ${({ bg }) => bg};
  border-radius: ${({ rounded }) => (rounded ? '5px' : '0px')};
`;
