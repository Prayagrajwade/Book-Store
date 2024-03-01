import React from 'react'
import Banner from '../components/Banner'
import FavoriteBook from './FavoriteBook'
import BestSellerBooks from './BestSellerBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'



const Home = () => {
  return (
    <>

    
    <Banner/>
    <BestSellerBooks/>
    <FavoriteBook/>
    <PromoBanner/>
    <OtherBooks/>
    <Review/>
    
    

    </>
  )
}

export default Home
