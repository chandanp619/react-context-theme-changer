import React from 'react'
import LayoutProvider from '../context/LayoutProvider';


const NotFound = ()=> {
  return (
      <LayoutProvider sidebar={true}>
      <main>404 : Page Not Found</main>
      </LayoutProvider>
   
  )
}
export default NotFound;