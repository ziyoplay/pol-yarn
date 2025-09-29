import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Cards from './Cards'
import Production from './producsion'
import Products from './Products'
import Partners from './Partners';  
import Map from './Map'
import Footer from './Footer'



export const Homepage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Cards/>
        <Production/>
        <Products/>
        <Partners/>
        <Map/>
        <Footer/>
    </div>
  )
}
