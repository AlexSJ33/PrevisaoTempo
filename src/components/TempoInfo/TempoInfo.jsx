/* eslint-disable react/prop-types */
import styles from './TempoInfo.module.css'

const TempoInfo = ( {tempo} ) => {

    

    

    return (
        <div className={styles.container}>
            <h2>{tempo.name}</h2>
            <div className={styles.imageTemp}>
                <img src={`http://openweathermap.org/img/wn/${tempo.weather[0].icon}.png`}/>
                <p>{Math.round(tempo.main.temp)}ºC</p>
            </div>
            <p>{tempo.weather[0].description}</p>
            <div className={styles.detalhes}>
                <p>Sensação térmica: {Math.round(tempo.main.feels_like)}ºC</p>
                <p>Umidade: {tempo.main.humidity}%</p>
                <p>Pressão: {tempo.main.pressure}</p>
            </div>
        </div>
    )
}

export default TempoInfo