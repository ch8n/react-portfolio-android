import React, { Fragment, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import Layout from './src/pages/Layout';


const App = () => {

  const [response, setResponse] = useState("")

  useEffect(() => {
    console.log("use effect called");
    fetch("https://blog-strapi-mongo-headless.herokuapp.com/portfolios")
      .then(res => res.json())
      .then(result => {
        console.log(result[0]);
        setResponse(JSON.stringify(result));
      }).catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <Fragment>
      <Layout >
        <Text>{response}</Text>
        <Button
          title="restart"
          onPress={() => { console.log("test") }}
        />
      </Layout>
    </Fragment>
  )
};

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#ee6e73',
    height: 56,
    alignSelf: 'stretch',
    textAlign: 'center',
  }
});

export default App;
