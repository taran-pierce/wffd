import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import SearchForm from '../components/searchForm';
import Main from '../components/main';
import Text from '../components/text';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>What's for fucking dinner?!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name={'viewport'} content={'width=device-width'} />
        <meta name={'author'} content={'Taran Pierce'} />
        {/* todo not ready for SEO yet */}
        <meta name={'robots'} content={'noindex, nofollow'} />
        <meta name={'description'} content={'Helping the age old question of: whats for fucking dinner tonight?!'} />
        <meta name={'keywords'} content={'food enlightenment couples life eating'} />
        {/* todo set up GTM for analytics */}
      </Head>
      <Main>
        <Container>
          <Text 
            content={'What\'s for fucking dinner?!'}
            type={'h1'}
          />
          <Text 
            content={'Welcome to the club, everyone is trying to figure out what to eat for fucking dinner.'}
          />
          <Text 
            content={'So look, if you want me to help you out, you are gonna have to tell me a few fucking things first.'}
          />
          <SearchForm />
        </Container>
      </Main>
    </Layout>
  );
}
