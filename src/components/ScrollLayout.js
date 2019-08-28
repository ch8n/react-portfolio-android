import React, { Fragment } from 'react'
import {
    ScrollView
} from 'react-native';

export default function ScrollLayout({ children }) {
    return (
        <Fragment>
            <ScrollView>
                {children}
            </ScrollView>
        </Fragment>
    )
}
