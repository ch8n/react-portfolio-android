import React, { Fragment, useEffect, useState } from 'react';
import ScrollLayout from '../components/ScrollLayout';
import Home from '../pages/Home';

const TestScreen = () => {

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
            <ScrollLayout >
                <Home profile={response} />
            </ScrollLayout>
        </Fragment>
    )
};

export default TestScreen

