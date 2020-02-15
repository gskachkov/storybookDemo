module.exports = {
  stories: ['../src/stories/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-jest'
  ],
};
