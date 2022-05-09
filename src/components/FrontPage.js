import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Walter from '../images/Walter.png'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import circle from '../images/circle.gif'


const FrontPage = () => {

  const [text, setText] = useState('')
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [randomQuote, setRandomQuote] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${search}`)
      setItems(result.data)
    }
    fetchCharacters()
  }, [search])

  useEffect(() => {
    const fetchQuote = async () => {
      const quoteResult = await axios(`https://www.breakingbadapi.com/api/quote/random?author=Walter+White`)
      setRandomQuote(quoteResult.data[0])
      setIsLoading(false)
    }
    fetchQuote()
  }, [])

  const onChange = (searchQuery) => {
    setText(searchQuery)
    setSearch(searchQuery)
  }

  return (
    <>

      <div className="container">

        <div className='logo-searchbar'>
          <img className='bb-logo' src={logo} alt='breaking bad logo' />


          <div className='searchAndButton'>
            <h3>Search for the characters from the best ever TV series.</h3>
            <input
              className='searchbar'
              type='text'
              placeholder='Jesse Pinkman'
              value={text}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>

          {
              isLoading ? (<img className='loading-bar' src={circle} alt='loading..' />) : (
                <div className='quote-div'>
                  <h3 className='author-quote'>{randomQuote.quote}</h3>
                  <p>- {randomQuote.author}</p>
                </div>
              )
            }

        </div>

        <img className='ww-img' src={Walter} alt='Walter White img' />

      </div>

      <div className='cards'>
        {
          items.map((data) => {
            return (
              <Link to={`/characters/${data.char_id}`}>
                <img src={data.img} alt='character-images' />

              </Link>
            )
          })
        }
      </div>

    </>
  )
}

export default FrontPage