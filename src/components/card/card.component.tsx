import { Driver } from '../../types/drivers'
import './card.style.css'

const Card = ({driver, overTake}: {driver: Driver, overTake: (id: number) => void}) => {
  const {id, lastname, firstname, team, place, country, code} = driver;
  return (
      <div className='card-container' key={id}>
        <h1>{firstname} {lastname}</h1>
        <h3>Team: {team}</h3>
        <h3>Position: {place}</h3>
        <h3>Country: {country}</h3>
        <img className='driver-image' src={`http://localhost:8080/static/${code.toLowerCase()}.png`} alt={lastname} />
        <button onClick={() => overTake(id)}>
              Overtake
        </button>
      </div>
  )
}

export default Card;