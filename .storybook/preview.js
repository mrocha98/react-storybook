import { addDecorator, addParameters, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import withGlobalStyles from './withGlobalStyles'
import theme from './theme'

addParameters({
  options: {
    theme
  }
})

addDecorator(withGlobalStyles)
addDecorator(withInfo)
