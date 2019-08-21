import React, { Fragment, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';
import Layout from './src/pages/Layout';


const App = () => {

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
    <Fragment>
      <Layout >

        {console.log(JSON.stringify(response))}
        {console.log(response.bio)}
        {console.log(response.designation)}

        <Text style={styles.name}>{response.name}</Text>
        <Text >{response.bio}</Text>

      </Layout>
    </Fragment>
  )
};

const styles = StyleSheet.create({
  name: {
    fontSize: 28
  }
});

export default App;
