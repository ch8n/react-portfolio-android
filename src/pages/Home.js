import React, { Fragment, useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';
import MarkDown from 'react-native-simple-markdown';
import Social from '../components/Social';
import Skills from '../components/Skills';
import Education from '../components/Education';
import ScrollLayout from '../components/ScrollLayout'


const Home = () => {

    const [response, setResponse] = useState({})

    useEffect(() => {
        console.log("use effect called");
        fetch("https://blog-strapi-mongo-headless.herokuapp.com/portfolios")
            .then(res => res.json())
            .then(result => {
                setResponse(result[0]);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <ScrollLayout>
            <View style={{ padding: 24 }}>
                {console.log(response)}
                {console.log(response.designation)}

                <Image style={styles.avatar} source={{ uri: response.avatar ? response.avatar.url : "" }} />
                <Text style={styles.name}>{response.name}</Text>
                <MarkDown style={{ ...styles.name, fontSize: 16 }}>{response.bio ? response.bio.replace("<br>", "\n") : ""}</MarkDown>
                <Text style={{ ...styles.name, fontSize: 28, marginTop: 16 }}>{response.designation}</Text>
                {response.designation ? (<Social urls={response.social_share} />) : (null)}

                <Skills skills={response.skills} />
                <Education education={response.meta ? response.meta.education : []} />
            </View>
        </ScrollLayout>
    )
}


const styles = StyleSheet.create({
    name: {
        fontSize: 36,
        marginBottom: 8
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 200 / 2,
        marginTop: 16,
        marginBottom: 16,
        alignSelf: "center"
    }
});


export default Home;