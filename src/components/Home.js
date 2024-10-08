import React, {useEffect} from 'react';
import LayoutProvider from '../context/LayoutProvider';

const  Home = () => {

  return (

    <LayoutProvider>
      <main>Home</main>
    </LayoutProvider>
  )
}
export default Home;