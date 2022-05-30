import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

function Button(props:any) {
  return (
    <button {...props}>Button</button>
  )
}

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  style: {
    backgroundColor: '#0070f3',
    color: '#fff',
  },
  label: 'Primary',
}

Secondary.args = {
  style: {
    backgroundColor: '#de4512',
    color: '#fff',
  },
  label: 'Primary',
}