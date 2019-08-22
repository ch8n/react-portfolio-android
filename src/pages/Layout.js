import React, { Fragment } from 'react'
import {
    ScrollView
} from 'react-native';

import Toolbar from '../components/Toolbar';

export default function Layout({ children }) {
    return (
        <Fragment>
            <Toolbar />
            <ScrollView>
                {children}
            </ScrollView>
        </Fragment>
    )
}
