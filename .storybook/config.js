import { configure, addDecorator } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info'

addDecorator(withInfo)

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
