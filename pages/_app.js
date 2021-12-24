import React, { useEffect } from 'react';

import CustomCursor from '../components/CustomCursor/CustomCursor';
import { Layout } from '../components/Layout';

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import '../styles/fonts/pragmatica/stylesheet.css';
import '../styles/fonts/Kudryashev/stylesheet.css';
import '../styles/fonts/switzer/css/switzer.css';





function MyApp({ Component, pageProps }) {



  return (
    <>
      <CustomCursor />
      <Layout>
        <Component {...pageProps} />
      </Layout>
   
    </>
  )
}

export default MyApp
