import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../GlobalStyles/breakpoints';

export type GridSizeOption = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  xs?: GridSizeOption;
  s?: GridSizeOption;
  m?: GridSizeOption;
  l?: GridSizeOption;
  xl?: GridSizeOption;
}

const StyledGridItem = styled.div<GridItemProps>`
  --grid-column-span: ${props => props.xl}

  grid-column: auto / span var(--grid-column-span);

  @media ${QUERIES.screenSizeL} {
    --grid-column-span: ${props => props.l}
  }

  @media ${QUERIES.screenSizeM} {
    --grid-column-span: ${props => props.m}
  }

  @media ${QUERIES.screenSizeS} {
    --grid-column-span: ${props => props.s}
  }

  @media ${QUERIES.screenSizeXs} {
    --grid-column-span: ${props => props.xs}
  }
`;

const GridItem = ({
  children,
  xs = 12,
  s = xs,
  m = s,
  l = m,
  xl = l,
}: GridItemProps): JSX.Element => (
  <StyledGridItem xl={xl} l={l} m={m} s={s} xs={xs}>
    {children}
  </StyledGridItem>
);

export interface GridProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  gutter: boolean;
}

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${props => (props.gutter ? 'var(--space-2)' : 'var(--space-0)')};
`;

export const Grid = (props: GridProps): JSX.Element => (
  <StyledGrid {...props} />
);

Grid.Item = GridItem;
