import React from 'react';
import styled from 'styled-components';

export interface HeadingProps
  extends Omit<
    React.HTMLAttributes<HTMLHeadingElement>,
    'style' | 'className'
  > {}

export const Heading = styled.h1<HeadingProps>``;
