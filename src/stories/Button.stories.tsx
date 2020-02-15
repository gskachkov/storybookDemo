import React from 'react';
import Button from '../components/Button/Button';
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
import { withActions } from '@storybook/addon-actions';
import results from '../../src/.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

document.addEventListener('test1',() => alert('it works!'));


storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(withA11y)
    .addDecorator(withA11y)
    .addDecorator(withActions('mouseover', 'click button'))
    .addDecorator(withTests({
        results,
    }))
    .addParameters({
        jest: ['Button.test.tsx'],
    })
    .add('Button', () => (
        <Button showReset={boolean('showReset', false)}/>
    ));
