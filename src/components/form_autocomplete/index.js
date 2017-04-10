import React, { Component } from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import theme from './theme';

class FormAutoComplete extends Component {
    state = {
        simple: '',
        multiple: []
    };

    handleMultipleChange = (value) => {
        this.setState({ multiple: value }, () => {
            this.props.onChangeAction(this.state.multiple)
            this.props.input.onChange(value)
        });
    };

    handleSimpleChange = (value) => {
        this.setState({ simple: value }, () => {
            this.props.onChangeAction(this.state.simple)
            this.props.input.onChange(value)
        })
    };

    render () {
        return (
            <Autocomplete
                label={this.props.label}
                source={this.props.source}
                value={this.props.multiple ? this.state.multiple : this.state.simple}
                onChange={this.props.multiple ? this.handleMultipleChange : this.handleSimpleChange}
            />
        );
    }
}

export default FormAutoComplete;
