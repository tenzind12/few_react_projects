import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, SetLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  const data = async () => {
    SetLoading(true);
    try{
      const response = await (await fetch(url)).json();
      SetLoading(false);
      setTours(response);
    }catch(error) {
      SetLoading(false);
      console.log(error)
    }
   
  }

  useEffect(()=> {
    data();
  }, []);

  if(loading) return <main><Loading/></main>;
  if(tours.length === 0) {
    return <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={data}>Refresh</button>
        </div>
      </main>
  }
  return <main><Tours props={tours} removeTour={removeTour}/></main>
}

export default App
