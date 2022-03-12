import React from 'react';
import styled from 'styled-components';

export interface LinkProps
  extends Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'style' | 'classname' | 'target' | 'rel'
  > {
  children: React.ReactNode;
  href: string;
  newTab: boolean;
}

const StyledLink = styled.a<LinkProps>``;

export const Link = (props: LinkProps) => {
  const targetArgs = props.newTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return <StyledLink {...props} {...targetArgs} />;
};
