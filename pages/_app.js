import React, { useEffect } from 'react'

import 'tailwindcss/tailwind.css'
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css';
import NavBar from '../components/NavBar';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <div className="">
    
      <Component {...pageProps} />

    </div>
  );

}

export default MyApp
