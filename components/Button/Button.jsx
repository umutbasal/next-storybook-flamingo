import React from 'react'
import classNames from 'classnames'
import {Button as FButton} from '@heetch/flamingo-react'
import styles from './Button.module.scss'

export const Button = ({ children, className, ...args }) => (
  <FButton intent={'primary'} className={classNames(styles.ButtonRed, className)} args={args}>{children}</FButton>
);