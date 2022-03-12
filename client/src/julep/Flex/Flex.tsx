import React from 'react';
import styled from 'styled-components';
import { flexbox, FlexboxProps as SSFlexProps } from 'styled-system';
import { BoxProps } from '../Box/Box';



export interface FlexProps extends BoxProps, SSFlexProps {}

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${flexbox}
`;
