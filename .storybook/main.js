module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register'
  ]
}
