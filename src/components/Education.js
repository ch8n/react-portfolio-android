import React, { Fragment } from 'react'
import { View, StyleSheet, Text } from 'react-native';

function Education({ education }) {
    console.log(education);
    const { degree, grade, institute, year } = education[0] ? education[0] : []
    return (
        education ? (<Fragment >
            <Text style={styles.font}>Education</Text>
            <Text style={{ ...styles.font, fontSize: 18 }} >{degree} - {grade}</Text>
            <Text style={{ ...styles.font, fontSize: 14, marginTop: 0 }}>{institute}-{year} </Text>
        </Fragment >) : (<Fragment></Fragment>)
    )
}

const styles = StyleSheet.create({
    font: {
        fontSize: 28,
        marginTop: 16
    }
})

export default Education
