import React, { Fragment } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import Toolbar from '../components/Toolbar';

export default function Layout({ children }) {
    return (
        <Fragment>
            <Toolbar />
            {children}
        </Fragment>
    )
}
