import React from 'react';
import Button from './Button';
import { text, radios } from "@storybook/addon-knobs";

export default {
    title: "Button"
};

const radioOptions = {
    Default: 'default',
    Red: 'red',
    Green: 'green',
};

export const ButtonStory = () => (
    <Button classValue={radios('Hover:',radioOptions, 'default' )} textValue={text('Text:', 'click')}/>
);

ButtonStory.story = {
    parameters: {
        jest: ['Button.test.tsx']
    },
};


