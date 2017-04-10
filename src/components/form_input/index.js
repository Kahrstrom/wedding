import React from 'react';
import Input from 'react-toolbox/lib/input';
import theme from './theme';

const RenderInput = ({ input, label, type, multiline, icon, className, meta: { touched, error } }) => (
    <div>
        <Input theme={theme} label={label} multiline={multiline} type={type} error={touched ? error : ''} {...input} />
    </div>
);

export default RenderInput;
