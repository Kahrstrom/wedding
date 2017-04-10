import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import { Link } from 'react-router';
import Theme from './theme.scss';

export default class SKAppBar extends Component {
    render() {
        return (
            <AppBar theme={Theme}>
                <IconMenu theme={Theme} icon='menu' position='topLeft' menuRipple>
                    <Link to="/" >
                        <MenuItem icon='home' caption='Home' />
                    </Link>
                    <Link to="/posts/new" >
                        <MenuItem icon='add' caption='Add blog post' />
                    </Link>
                </IconMenu>
            </AppBar>
        );
    }
}
