'use client'
import { useState } from 'react'
import Results from '../weather/weather-results/page'
import { FavCitiesArray } from '../page'
 
export default function Page() {

  var currFav = window.sessionStorage.getItem("city")??"";

  if( !FavCitiesArray.includes(currFav) ){
    FavCitiesArray.push(currFav)
  }
  console.log(FavCitiesArray)

  const results : Array<any> = []
  FavCitiesArray.forEach((city, index) => {
    if(city)
   {   results.push(
        <div key={index}>
          <Results query={city} />
        </div>
      )}
  }
)
// const cntxt = createContext(appendCities)
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col'>
        {results}
      </div>
    </div>
  )
}