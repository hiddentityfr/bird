import React, { useCallback, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

import { uuid, theme } from '@utils';
import { useClickOutside } from '@hooks';

import { Text } from '@components/DataDisplay';
import { Container, Spacer } from '@components/Layouts';

import {
  StyledAutocompleteOption,
  StyledAutocompleteOptionContainer,
} from './option';
import {
  StyledAutocomplete,
  StyledAutocompleteContainer,
  StyledAutocompleteProps,
  StyledAutocompleteContainerProps,
  AutocompleteInput,
} from './style';

type Option<T> = { value: T; label: string };

interface AutocompleteProps<T>
  extends Partial<Omit<StyledAutocompleteProps, 'variant' | 'open'>>,
    Partial<StyledAutocompleteContainerProps> {
  options: Option<T>[];
  onSelect: (value: T) => void;
  onChange?: (v: string) => void;
  onBlur?: (v: string) => void;
  selected?: Option<T>;
  placeholder?: string;
  caseSensitive?: boolean;
  disabled?: boolean;
  error?: boolean;
  title?: string;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const Autocomplete = <T,>({
  options,
  onSelect,
  onChange = () => {},
  onBlur = () => {},
  selected,
  size,
  title = '',
  placeholder = 'Autocomplete...',
  caseSensitive = false,
  thickness = 'medium',
  disabled = false,
  error = false,
  gap = 3,
}: AutocompleteProps<T>): JSX.Element => {
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selected);
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));

  const getVariant = useCallback(() => {
    if (disabled) return 'disabled';
    if (error) return 'error';
    return 'default';
  }, [disabled, error]);

  const handleAutocomplete = useCallback(
    (e: Option<T>): void => {
      onSelect(e.value);
      setOpen(false);
      setSelectedOption(e);
    },
    [onSelect]
  );

  const handleInputChange = (newInput: string) => {
    if (selectedOption) {
      setSelectedOption(undefined);
    }
    setInput(newInput);
    onChange(newInput);
  };

  return (
    <Container gap={gap} flex={size ? 0 : 1}>
      {title !== '' && (
        <>
          <Text color={theme.cvar('colorGrey')} variant="small">
            {title}
          </Text>
          <Spacer size={1} />
        </>
      )}
      <StyledAutocompleteContainer ref={ref} size={size ?? 'medium'}>
        <StyledAutocomplete
          open={open}
          thickness={thickness}
          variant={getVariant()}
        >
          <Container row justify="space-between" gap={0}>
            <AutocompleteInput
              onClick={(): void => setOpen(true)}
              onBlur={(e) => onBlur(e.target.value)}
              focused={open}
              variant={getVariant()}
              type="text"
              placeholder={placeholder}
              value={selectedOption?.label ?? input}
              onChange={(e): void => handleInputChange(e.target.value)}
            />
            {open ? (
              <ChevronUp
                style={{ cursor: 'pointer' }}
                size={18}
                onClick={(): void => setOpen(!open)}
              />
            ) : (
              <ChevronDown
                style={{ cursor: 'pointer' }}
                size={18}
                onClick={(): void => setOpen(!open)}
              />
            )}
          </Container>
        </StyledAutocomplete>
        {open && (
          <StyledAutocompleteOptionContainer>
            {options
              .filter((e) => {
                if (selectedOption) {
                  return e.label === selectedOption.label;
                }
                return caseSensitive
                  ? e.label.includes(input)
                  : e.label.toLowerCase().includes(input.toLowerCase());
              })
              .map((e, i) => (
                <StyledAutocompleteOption
                  key={uuid()}
                  isFirst={i === 0}
                  isLast={i === options.length - 1}
                  onClick={(): void => handleAutocomplete(e)}
                >
                  {e.label}
                </StyledAutocompleteOption>
              ))}
          </StyledAutocompleteOptionContainer>
        )}
      </StyledAutocompleteContainer>
    </Container>
  );
};

export default Autocomplete;
