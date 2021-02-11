import React from 'react'
import classNames from 'classnames'
import {Button as FButton} from '@heetch/flamingo-react'
import styled from 'styled-components'

export const FlamingoButton = styled(FButton)`
  width: 100%;
  color: red;
`;

export const Button = ({ children, className, ...args }) => (
  <FlamingoButton intent={'primary'} className={classNames(className)} args={args}>{children}</FlamingoButton>
);

export default Button;