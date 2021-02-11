import React from 'react'
import { Button } from './Button'

export default {
  title: 'Button',
  argTypes: { onClick: { action: 'clicked' } },
}

const TemplateWithText = (args) => <Button {...args}>Hello</Button>

export const withText = TemplateWithText.bind({})

withText.args = {}