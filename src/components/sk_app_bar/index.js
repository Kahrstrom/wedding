import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import { Link } from 'react-router';
import Theme from './theme.scss';
import {Button, IconButton} from 'react-toolbox/lib/button';

export default class SKAppBar extends Component {
    render() {
        return (
            <AppBar fixed title="Agnes och Jonatans bröllop" theme={Theme}>
                {/*<IconMenu theme={Theme} icon='menu' position='topLeft' menuRipple>
                    <Link to="/" >
                        <MenuItem icon='home' caption='Hem' />
                    </Link>
                    <Link to="/register" >
                        <MenuItem icon='create' caption='Anmälan' />
                    </Link>
                </IconMenu>*/}
                <Navigation type="horizontal">
                    <Link to="/">
                        <Button theme={Theme} icon='home' flat />
                    </Link>
                    <Link to="/register">
                        <Button className={Theme.buttonText} theme={Theme} icon='send' label='Anmälan' flat />
                    </Link>
                    <Link to="/">
                        <Button className={Theme.buttonText} theme={Theme} icon='camera_alt' label='Bilder' disabled/>
                    </Link>
                </Navigation>
            </AppBar>
        );
    }
}
