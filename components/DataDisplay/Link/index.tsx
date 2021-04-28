import React, { ReactNode } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

import StyledLink from './style';

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  onClick?: () => void;
}

const Link = ({
  children,
  href,
  replace,
  scroll,
  shallow,
  onClick,
}: LinkProps): JSX.Element => {
  return (
    <NextLink
      href={href}
      passHref
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <StyledLink onClick={onClick}>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;
