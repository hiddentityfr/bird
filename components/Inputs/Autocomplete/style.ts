import styled from 'styled-components';

import { theme } from '@utils';

const color = {
  base: {
    text: {
      default: theme.cvar('colorSelectTextDefault'),
      error: theme.cvar('colorSelectTextError'),
      disabled: theme.cvar('colorSelectTextDisabled'),
    },
    border: {
      default: theme.cvar('colorSelectBorderDefault'),
      error: theme.cvar('colorSelectBorderError'),
      disabled: theme.cvar('colorSelectBorderDisabled'),
    },
  },
  hover: {
    default: theme.cvar('colorSelectDefaultHover'),
    error: theme.cvar('colorSelectErrorHover'),
    disabled: theme.cvar('colorSelectDisabledHover'),
  },
};

export interface StyledAutocompleteContainerProps {
  size: 'short' | 'medium' | 'long';
}

export const StyledAutocompleteContainer = styled.div<
  StyledAutocompleteContainerProps
>`
  // Layout
  position: relative;
  min-width: ${({ size }): string => {
    switch (size) {
      case 'long':
        return '180px';
      case 'short':
        return '120px';
      case 'medium':
      default:
        return '150px';
    }
  }};
`;

export interface StyledAutocompleteProps {
  open: boolean;
  variant: 'default' | 'error' | 'disabled';
  thickness: 'small' | 'medium' | 'large';
}

export const StyledAutocomplete = styled.div<StyledAutocompleteProps>`
  // Style
  cursor: ${({ variant }): string =>
    variant === 'disabled' ? 'not-allowed' : 'pointer'};
  border: 1px solid
    ${({ variant, open }): string =>
      open ? color.hover[variant] : color.base.border[variant]};
  border-radius: ${theme.cvar('layoutRadius')};

  // Image
  svg {
    color: ${({ variant, open }): string =>
      open ? color.hover[variant] : color.base.text[variant]};
  }

  // Text
  white-space: nowrap;
  small {
    color: ${({ variant, open }): string =>
      open ? color.hover[variant] : color.base.text[variant]};
  }

  // Layout
  div {
    margin: 0 ${theme.cvar('layoutSpace2x')};
  }
  padding: ${({ thickness }): string => {
    switch (thickness) {
      case 'large':
        return `${theme.cvar('layoutSpaceGapHalf')} 0`;
      case 'small':
        return `${theme.cvar('layoutSpace')} 0`;
      case 'medium':
      default:
        return `${theme.cvar('layoutSpace2x')} 0`;
    }
  }};

  // Animation
  transition: all 0.2s ease 0s;

  // Interaction
  :hover {
    svg {
      color: ${({ variant }): string => color.hover[variant]};
    }
    small {
      color: ${({ variant }): string => color.hover[variant]};
    }
    border: 1px solid ${({ variant }): string => color.hover[variant]};
  }
`;

interface AutocompleteInputProps {
  focused: boolean;
  variant: 'default' | 'error' | 'disabled';
}
export const AutocompleteInput = styled.input<AutocompleteInputProps>`
  display: flex;
  flex: 1;
  border: 0;
  box-sizing: content-box;
  outline: none;
  background: inherit;
  color: ${({ variant, focused }): string =>
    focused ? color.hover[variant] : color.base.text[variant]};
  font-size: ${theme.typography.small.size};
  font-family: Montserrat, sans-serif;
`;
