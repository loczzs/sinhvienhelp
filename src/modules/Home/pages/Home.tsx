import React from 'react'
import Blog from '../components/BLog/Blog'
import Carousel from '../components/Carousel/Carousel'
import Listcty from '../components/List/Listcty'


const Home = () => {
  return (
    <div>
        <Carousel/>
        <Listcty/>
        <Blog/>
    </div>
  )
}

export default Home