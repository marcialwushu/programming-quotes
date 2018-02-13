import React from 'react'
import Quotes from '../components/main/Quotes'
import Picture from '../components/main/Picture'

const MainContent = ({ language, chosenAuthor, mainImage, currentQuotes }) => {
  return (
    <main>
      <Picture imgSrc={mainImage} author={chosenAuthor} />
      <Quotes language={language} currentQuotes={currentQuotes} />
    </main>
  )
}

export default MainContent
