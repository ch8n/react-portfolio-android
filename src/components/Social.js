import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faGithub, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Social() {
    return (
        <View >
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: 250 }}>
                <FontAwesomeIcon icon={faGithub} size={32} />
                <FontAwesomeIcon icon={faTwitter} size={32} />
                <FontAwesomeIcon icon={faFacebook} size={32} />
                <FontAwesomeIcon icon={faInstagram} size={32} />
                <FontAwesomeIcon icon={faLinkedin} size={32} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: "row",
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
