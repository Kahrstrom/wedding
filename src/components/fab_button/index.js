import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import theme from './theme.scss';

class FabButton extends Component {
    constructor(props) {
        super(props);
        const horizontal = `${this.props.right ? theme.right : ''} ${this.props.left ? theme.left : ''}`;
        const vertical = `${this.props.top ? theme.top : ''} ${this.props.bottom ? theme.bottom : ''}`;
        const classNames = `${horizontal} ${vertical}`
        this.state = {
            classNames
        }
    } 
    render() {
        const {right, left, bottom, top, ...props} = this.props;
        return (
            <Button icon={this.props.icon} 
                theme={theme}
                className={this.state.classNames}
                {...props} />
        );
    }
}

export default FabButton;