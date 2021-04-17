import React from 'react';
import Layout from '../../components/layout';
import Container from '../../components/container';
import ResultCard from '../../components/resultCard';
// import Head from 'next/head';

// require yelp module
const yelp = require('yelp-fusion');

// get API key from ENV
const apiKey = process.env.API_KEY;

// init Yelp client
const client = yelp.client(apiKey);


const SearchTerm = (props) => {
  const {
    data,
  } = props;

  // TODO dont stringify it and you dont have to parse it, duh
  const searchData = JSON.parse(data);

  return (
    <>
      <Layout>
        <main>
          <Container>
            <h1>Search Term: {props.term}</h1>
            <h2>Location: {props.location}</h2>
            <ResultCard
              data={searchData} 
            />
          </Container>
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { 
    term,
    city,
    state,
  } = context.query;

  const location = `${city}, ${state}`;

  const searchRequest = {
    term,
    location,
  };

  const data = await client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);

    return prettyJson;
  }).catch(e => {
    console.log(e);
  });

  return {
    props: {
      term,
      data,
      location,
    },
  };
}

export default SearchTerm;
