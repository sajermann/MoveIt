import '../styles/global.css';
import {ChallengesProvider} from '../contexts/ChallengesContext'
import { useState } from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';
function MyApp({ Component, pageProps }) {



  return (
    <Component {...pageProps} />
  )
}

export default MyApp
