import React from 'react'
import { Header } from './HeadFoot/Header'
import { Footer } from './HeadFoot/Footer'
export const DefaultLayout = ({children}) => {
  return (
     <div className='default-layout'>
         <div className='header mb-2'>
            <Header/>
         </div>
         <main className='main'>
           {children}
         </main>
        <footer className='footer'>
            <Footer/>
        </footer>
     </div>
  )
}
//children is props