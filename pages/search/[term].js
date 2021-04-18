import React from 'react';
import Layout from '../../components/layout';
import Container from '../../components/container';
// import Head from 'next/head';
import ResultsContainer from '../../components/resultsContainer';

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

  return (
    <>
      <Layout>
        <main>
          <Container>
            <h1>Search Term: {props.term}</h1>
            <h2>Location: {props.location}</h2>
            <ResultsContainer 
              data={data} 
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
    const {
      businesses,
      total,
      region,
    } = response.jsonBody;

    console.log({
      total,
      region,
      businesses,
    });

    return {
      total,
      region,
      businesses,
    };
  }).catch(e => {
    console.log(e);
  });

  return {
    props: {
      term: term,
      data: data,
      location: location,
    },
  };
}

export default SearchTerm;
