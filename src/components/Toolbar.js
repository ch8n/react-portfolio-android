import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback } from 'react-native';


export default function Toolbar() {
    return (
        <View style={styles.toolbar}>
            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={() => { console.log("Projects clicked!") }}>
                    <Text style={styles.toolbarItem}>Projects</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={() => { console.log("Apps clicked!") }}
                >
                    <Text style={styles.toolbarItem}>Apps</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity
                style={{ alignSelf: "center" }}
                onPress={() => { console.log("Home clicked!") }}
            >
                <Text style={{ ...styles.toolbarItem, ...styles.brand }}>Dev.Ch8n</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: "row",
        backgroundColor: '#ee6e73',
        height: 56,
        justifyContent: "space-between"
    },
    brand: {
        fontSize: 32,
        padding: 8
    },
    toolbarItem: {
        fontSize: 16,
        padding: 16,
        color: "#fff"
    }
});
