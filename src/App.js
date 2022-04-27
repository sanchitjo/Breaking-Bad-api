import { useState } from 'react';
import './App.css';
import Walter from './images/Walter.png'
import logo from './images/logo.svg'
import axios from 'axios';



function App() {
  const [name, setName] = useState([])

  const handleClick = () => {
    axios
      .get(`https://www.breakingbadapi.com/api/characters`)
      .then((nameData) => {
        setName(nameData.data)
      })
  }

  return (
    <>
      <div className="container">
        

        <div className='logo-searchbar'>
          <img className='bb-logo' src={logo} alt='breaking bad logo' />
          <h3>Search for the characters from the best ever TV series.</h3>
          
          <div className='searchAndButton'>
            <input className='searchbar' type='text' placeholder='Walter White' />
            <button onClick={handleClick} className='sraech-button'>Get all Characters</button>
          </div>
        
        </div>

        <img className='ww-img' src={Walter} alt='Walter White img' />
        
        
      </div>

      <div className='cards'>
        {
          name.map((data) => {
            return (
              <div>
                <img src={data.img} alt='character-images' />
                <h3>{data.name}</h3>

                {/* <h3>{data.occupation}</h3>
                <h4>{data.portrayed}</h4>
                <h4>{data.status}</h4> */}
              </div>
            )
          })
        }
      </div>
      
    </>
  );
}

export default App;
