import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {}

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${space}
`;
