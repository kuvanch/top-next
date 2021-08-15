import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return <>
    <Head>
        <title>Главная</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta name="theme-color" content="#000000"/>
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
