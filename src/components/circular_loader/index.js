import React, { Component } from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import theme from './theme.scss';

class CircularLoader extends Component {
    render () {
        return (
            <div className={theme.loadingCard}>
                <ProgressBar theme={theme} type='circular' mode='indeterminate' multicolor />
            </div>
        );  
    }
}

export default CircularLoader;