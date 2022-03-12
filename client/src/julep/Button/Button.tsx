import React from 'react';
import styled from 'styled-components';

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'style' | 'classname'
  > {
  children: React.ReactNode;
}

export const Button = styled.button<ButtonProps>``;
