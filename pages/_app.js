
import 'tailwindcss/tailwind.css'
import NavBar from '../components/NavBar';
import Dashboard from './Dashboard';




function MyApp({ Component, pageProps }) {



  return (
    <div className="">


      <NavBar />
      <Component {...pageProps} />

    </div>
  );

}

export default MyApp
