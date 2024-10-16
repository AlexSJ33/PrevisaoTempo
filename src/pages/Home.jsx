import { useRef, useState } from 'react'
import axios from 'axios'

import  styles from './Home.module.css'
import TempoInfo from '../components/TempoInfo/TempoInfo'
import TempoPreview from '../components/TempoPreview/TempoPreview'

const Home = () => {
  const [tempo, setTempo] = useState()
  const [fiveDays, setFiveDays] = useState()

  const inputRef = useRef()
  
  async function searchCity() {
    
    const city = inputRef.current.value
    const key = "e13c2fd005b22da7186ab63e49168a44"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiData = await axios.get(url)
    const apiDataFiveDays = await axios.get(urlFiveDays) 
    

    const dados = apiData.data
    const dadosFive = apiDataFiveDays.data
    


    setTempo(dados)
    setFiveDays(dadosFive)

  
}

  return (
    <div className={styles.container}>
      <h1> Previsão do Tempo</h1>
      <input ref={inputRef} type="text"  placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar Região</button>

      {tempo && <TempoInfo tempo={tempo}/>}
      {tempo && <TempoPreview fiveDays={fiveDays}/>}
      
    </div>
  )
}

export default Home
