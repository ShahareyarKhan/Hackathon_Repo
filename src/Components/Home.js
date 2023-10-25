import React from 'react'
import Heros from './Heros'
import MentalType from './MentalType'
import Footer from './Footer'
import QuestionBlock from './QuestionBlock'

const Home = () => {
  return (
    <div>
      <Heros/>
      <MentalType/>
      <QuestionBlock/>
      <Footer/>
    </div>
  )
}

export default Home
