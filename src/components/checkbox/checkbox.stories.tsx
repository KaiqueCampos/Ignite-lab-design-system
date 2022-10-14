import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../text'
import { Checkbox, CheckboxProps } from './index'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex itens-center gap-2'>
                    {Story()}
                    <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
                </div>
            )
        }
    ]

} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}


