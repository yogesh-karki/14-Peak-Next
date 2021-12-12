import React from 'react';

import { Layout } from '../components/Layout';

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import '../styles/fonts/pragmatica/stylesheet.css';
import '../styles/fonts/Kudryashev/stylesheet.css';
import '../styles/fonts/switzer/css/switzer.css';




function MyApp({ Component, pageProps }) {

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
   
    </>
  )
}

export default MyApp
