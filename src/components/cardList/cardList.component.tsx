import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Card from '../card/card.component'
import { Driver } from '../../types/drivers'
import './cardList.style.css'

const CardList = () => {

  const [drivers, setDrivers] = useState<Driver[]>([])
  const [loading, setLoading] = useState(true);

  const fetchData = async() => {
      return axios.get('http://localhost:8080/api/drivers').then((response) => {
          setDrivers(response.data)
          setLoading(false);
      })
    };

  const overTake = (id:number) => {
      return axios.post(`http://localhost:8080/api/drivers/${id}/overtake`).then((response) => {
          setDrivers(response.data)
          setLoading(false);
      })
  }

  useEffect(()=> {
      fetchData();
  }, [])


  return loading ? (<h1>Loading...</h1>) : (
        <div className="card-list">
            {drivers.map(driver => (
                <Card driver={driver} overTake={overTake} key={driver.id}/>
            ))}
        </div>
  );
}

export default CardList;