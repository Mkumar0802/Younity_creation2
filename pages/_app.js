import { Carousel } from 'flowbite-react';
import 'tailwindcss/tailwind.css'
import CarouselPage from '../components/CarouselPage';




function MyApp({ Component, pageProps }) {



  return (
    <div className="">



      <CarouselPage/>
      <Component {...pageProps} />
     
    </div>
  );

}

export default MyApp
