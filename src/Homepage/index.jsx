import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Cards from './Cards'
import Production from './producsion'
import Products from './Products'


export const Homepage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Cards/>
        <Production/>
        <Products/>
    </div>
  )
}
