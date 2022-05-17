import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import vanImage from '../images/vanImage.jpg'


const CharacterDetails = () => {

  const [item, setItem] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const fetchCharactersById = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters/${id}`)
      setItem(res.data[0])
      setIsLoading(false)
    }
    fetchCharactersById()
  }, [id])
  

  return isLoading ? (
    <img className='loading-img' src={vanImage} alt='loading' />
  ) : (
    
    <div className='Character-id'>
        
      <div className='img-div-id'>
        <img className='img-id' src={item.img} alt='character img' />
      </div>

      <div className='character-details'>
        <h1>{item.name}</h1>
        <p>Portrayed as: <strong>{item.portrayed}</strong></p>
        <p>Status: <strong>{item.status}</strong></p>
        <p>Nickname: <strong>{item.nickname}</strong></p>
        <p>Occupation: <strong>{item.occupation?.join(', ')}</strong></p>
        <p>Appeared in seasons: <strong>{item.appearance?.join(', ')}</strong></p>
        <p>Birth Date: <strong>{item.birthday}</strong></p>
      </div>
    </div>
  )
}

export default CharacterDetails