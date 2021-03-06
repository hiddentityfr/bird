const CSSVariables = {
  colorBackground: '--color-primary',
  colorForeground: '--color-secondary',
  colorTeal: '--color-teal',
  colorLink: '--color-link-purple',
  colorGrey: '--color-grey',
  colorPink: '--color-pink',
  colorPurple: '--color-purple',
  colorAccent1: '--color-accents-1',
  colorAccent2: '--color-accents-2',
  colorAccent3: '--color-accents-3',
  colorAccent4: '--color-accents-4',
  colorAccent5: '--color-accents-5',
  colorAccent6: '--color-accents-6',
  colorAccent7: '--color-accents-7',
  colorAccent8: '--color-accents-8',
  colorInlineCode: '--color-inline-code-teal',
  colorAccents1: '--color-accents-1',
  colorAccents2: '--color-accents-2',
  colorAccents3: '--color-accents-3',
  colorAccents4: '--color-accents-4',
  colorAccents5: '--color-accents-5',
  colorAccents6: '--color-accents-6',
  colorButtonBgPrimary: '--color-btn-bg-primary',
  colorButtonBgSecondary: '--color-btn-bg-secondary',
  colorButtonBgDisabled: '--color-btn-bg-disabled',
  colorButtonBorderPrimary: '--color-btn-bdr-primary',
  colorButtonBorderSecondary: '--color-btn-bdr-secondary',
  colorButtonBorderDisabled: '--color-btn-bdr-disabled',
  colorButtonTextPrimary: '--color-btn-txt-primary',
  colorButtonTextSecondary: '--color-btn-txt-secondary',
  colorButtonTextDisabled: '--color-btn-txt-disabled',
  colorSelectTextDefault: '--color-select-txt-default',
  colorSelectTextError: '--color-select-txt-error',
  colorSelectTextDisabled: '--color-select-txt-disabled',
  colorSelectBorderDefault: '--color-select-bdr-default',
  colorSelectBorderError: '--color-select-bdr-error',
  colorSelectBorderDisabled: '--color-select-bdr-disabled',
  colorSelectDefaultHover: '--color-select-default-hover',
  colorSelectErrorHover: '--color-select-error-hover',
  colorSelectDisabledHover: '--color-select-disabled-hover',
  colorSelectOptionText: '--color-select-option-txt',
  colorSelectOptionHover: '--color-select-option-hover',
  colorToggleBgOff: '--color-toggle-bg-off',
  colorToggleBgOn: '--color-toggle-bg-on',
  colorCheckboxBgChecked: '--color-checkbox-bg-checked',
  colorCheckboxBgUnchecked: '--color-checkbox-bg-unchecked',
  colorCheckboxIconChecked: '--color-checkbox-icon-checked',
  colorCheckboxIconUnchecked: '--color-checkbox-icon-unchecked',
  colorCheckboxBorderChecked: '--color-checkbox-bdr-checked',
  colorCheckboxBorderUnchecked: '--color-checkbox-bdr-unchecked',
  colorCheckboxDisabled: '--color-checkbox-disabled',
  shadowSmallest: '--shadow-smallest',
  shadowSmall: '--shadow-small',
  shadowMedium: '--shadow-medium',
  shadowLarge: '--shadow-large',
  layoutRadius: '--layout-radius',
  layoutRadius2x: '--layout-radius-2x',
  layoutSpace: '--layout-space',
  layoutSpace2x: '--layout-space-2x',
  layoutSpace4x: '--layout-space-4x',
  layoutSpace8x: '--layout-space-8x',
  layoutSpace16x: '--layout-space-16x',
  layoutSpace32x: '--layout-space-32x',
  layoutSpaceGap: '--layout-space-gap',
  layoutSpaceGapHalf: '--layout-space-gap-half',
  colorButtonGreen: '--color-teal',
};

const cvar = (key: keyof typeof CSSVariables): string =>
  `var(${CSSVariables[key]})`;

export default {
  cvar,
  typography: {
    h1: { size: '3em', weight: 'bold' },
    h2: { size: '2.25em', weight: 600 },
    h3: { size: '1.5em', weight: 600 },
    h4: { size: '1.25em', weight: 600 },
    h5: { size: '1em', weight: 600 },
    h6: { size: '0.875em', weight: 600 },
    p: { size: '0.875em', weight: 600 },
    small: { size: '0.875em', weight: 'normal' },
  },
};
