import React, { Fragment } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';

export default function Skills({ skills }) {

    const showSkills = () => skills ? (
        <Text
            style={{ ...styles.font, fontSize: 16, marginTop: 8 }}>{Object.keys(skills).join(", ")}
        </Text>) : (<View></View>)

    return (
        <Fragment>
            <Text style={styles.font}>{skills ? "Technical Knowledge" : ""}</Text>
            {showSkills()}

        </Fragment>
    )
}

const styles = StyleSheet.create({
    font: {
        fontSize: 28,
        marginTop: 16
    }
});
