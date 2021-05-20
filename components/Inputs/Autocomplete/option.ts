import styled from 'styled-components';

import { theme } from '@utils';

export const StyledAutocompleteOptionContainer = styled.div`
  // Style
  background: ${theme.cvar('colorBackground')};
  box-shadow: ${theme.cvar('shadowLarge')};
  border-radius: ${theme.cvar('layoutRadius')};

  // Layout
  position: absolute;
  width: 100%;
  margin-top: ${theme.cvar('layoutSpace2x')};
  z-index: 2;
  max-height: 175px;
  overflow: scroll;
`;

interface StyledAutocompleteOptionProps {
  isFirst?: boolean;
  isLast?: boolean;
}

export const StyledAutocompleteOption = styled.div<
  StyledAutocompleteOptionProps
>`
  // Style
  cursor: pointer;
  border-radius: ${({ isFirst, isLast }): string =>
    (isFirst &&
      `${theme.cvar('layoutRadius')} ${theme.cvar('layoutRadius')} 0 0`) ||
    (isLast &&
      `0 0 ${theme.cvar('layoutRadius')} ${theme.cvar('layoutRadius')}`) ||
    'none'};

  // Text
  color: ${theme.cvar('colorSelectOptionText')};
  font-size: ${theme.typography.small.size};
  font-family: Montserrat, sans-serif;

  // Layout
  padding: ${theme.cvar('layoutSpace2x')};

  // Interaction
  :hover {
    background: ${theme.cvar('colorSelectOptionHover')};
  }
`;
