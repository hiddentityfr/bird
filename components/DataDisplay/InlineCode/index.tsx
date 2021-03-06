import React from 'react';

import StyledInlineCode from './style';

interface InlineCodeProps {
  children: string;
}

const InlineCode = ({ children }: InlineCodeProps): JSX.Element => {
  return <StyledInlineCode>{children}</StyledInlineCode>;
};

export default InlineCode;
