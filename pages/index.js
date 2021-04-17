import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import SearchForm from '../components/searchForm';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>What's for fucking dinner?!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <h1>What's for fucking dinner?!</h1>
          <p>Welcome to the club, everyone is trying to figure out what to eat for fucking dinner.</p>
          <SearchForm />
        </Container>
      </main>
    </Layout>
  );
}
