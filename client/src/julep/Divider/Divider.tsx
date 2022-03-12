import React from 'react';
import styled from 'styled-components';
import * as Separator from '@radix-ui/react-separator';
import { SpaceOption } from '../__internal__/internal.types';

export interface DividerProps {
  orientation?: 'vertical' | 'horizontal';
  margin?: SpaceOption;
}

const BaseDivider = styled(Separator.Root)<DividerProps>`
  background-color: var(--color-black);
  &[data-orientation="horizontal"] { 
    height: 1px;
    width: 100%;
    margin-block: var(--space-${props => props.margin});
  }
  &[data-orientation="vertical"] {
    height: 1rem;
    width: 1px;
    margin-inline: var(--space-${props => props.margin});
  }
`;

export const Divider = ({margin = 2, ...rest}: DividerProps): JSX.Element => (
  <BaseDivider margin={margin} {...rest} />
)