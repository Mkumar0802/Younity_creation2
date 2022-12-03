
import 'tailwindcss/tailwind.css'
import NavBar from '../components/NavBar';





function MyApp({ Component, pageProps }) {



  return (
    <div className="">


      <NavBar />
      <Component {...pageProps} />

    </div>
  );

}

export default MyApp
