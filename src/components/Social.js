import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faGithub, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { CustomTabs } from "react-native-custom-tabs"

export default function Social({ urls }) {

    const { github, facebook, twitter, instagram, linkedin } = urls

    return (
        <View >
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: 250 }}>

                <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={() => {
                        CustomTabs.openURL(github)
                            .then(launched => {
                                console.log(`Launched custom tabs: ${launched}`);
                            }).catch(err => {
                                console.error(err)
                            })
                    }}>
                    <FontAwesomeIcon icon={faGithub} size={32} />
                </TouchableOpacity>


                <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={() => {
                        CustomTabs.openURL(twitter)
                            .then(launched => {
                                console.log(`Launched custom tabs: ${launched}`);
                            }).catch(err => {
                                console.error(err)
                            })
                    }}>
                    <FontAwesomeIcon icon={faTwitter} size={32} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={() => {
                        CustomTabs.openURL(facebook)
                            .then(launched => {
                                console.log(`Launched custom tabs: ${launched}`);
                            }).catch(err => {
                                console.error(err)
                            })
                    }}>
                    <FontAwesomeIcon icon={faFacebook} size={32} />
                </TouchableOpacity>



                <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={() => {
                        CustomTabs.openURL(instagram)
                            .then(launched => {
                                console.log(`Launched custom tabs: ${launched}`);
                            }).catch(err => {
                                console.error(err)
                            })
                    }}>
                    <FontAwesomeIcon icon={faInstagram} size={32} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={() => {
                        CustomTabs.openURL(linkedin)
                            .then(launched => {
                                console.log(`Launched custom tabs: ${launched}`);
                            }).catch(err => {
                                console.error(err)
                            })
                    }}>
                    <FontAwesomeIcon icon={faLinkedin} size={32} />
                </TouchableOpacity>


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
