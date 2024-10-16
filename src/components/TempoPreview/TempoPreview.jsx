/* eslint-disable react/prop-types */
import styles from './TempoPreview.module.css'

const TempoPreview = ( {fiveDays} ) => {

    console.log(fiveDays)

    let diasPrevisao = {}

    for(let previsao of fiveDays.list) {
        const data = new Date(previsao.dt * 1000).toLocaleDateString()
        
        if(!diasPrevisao[data]) {
            diasPrevisao[data] = previsao
            
        }
    }
    const proximosCincoDias = Object.values(diasPrevisao).slice(1,6)

    console.log(proximosCincoDias)

    function converterData(data) {
        const newDate = new Date(data.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'long', day:'2-digit'})
        
        return newDate
    }

    return (
        <div className={styles.container}>
            <h2>Previsão para os proximos 5 dias</h2>
            <div className={styles.diasLista}>
                {proximosCincoDias.map(cincoDias =>(
                    <div key={cincoDias.dt} className={styles.diasItem}>
                        <p className={styles.dias}>{converterData(cincoDias)}</p>
                        <img src={`http://openweathermap.org/img/wn/${cincoDias.weather[0].icon}.png`} alt="" />
                        <p className={styles.descricao}>{cincoDias.weather[0].description}</p>
                        <p>min:{Math.round(cincoDias.main.temp_min)}ºC/máx:{Math.round(cincoDias.main.temp_max)}ºC</p>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default TempoPreview