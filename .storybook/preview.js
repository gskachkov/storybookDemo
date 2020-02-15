import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../src/.jest-test-results.json';
import {withKnobs} from "@storybook/addon-knobs";
import {withA11y} from "@storybook/addon-a11y";
import {withActions} from "@storybook/addon-actions";
import { configure } from '@storybook/react';

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withActions('mouseover', 'click button'));
addDecorator(withTests({
    results,
}));


const req = require.context('../src/components', true, /\.stories\.tsx$/);
configure(req, module);
