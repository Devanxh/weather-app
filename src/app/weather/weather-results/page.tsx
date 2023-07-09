'use client'
import { useState, useEffect, createContext } from "react";
import Image from "next/image";
import axios from "axios";

export default function Results( props : any ) {

	const [ weatherData, setWeatherData ] = useState<any>();
    const [ weatherImg, setWeatherImg ] = useState<string>("");
    
    useEffect( () => {
        axios ({
            url: 'https://api.openweathermap.org/data/2.5/weather?q='+props.query+'&appid=5ffa2fa675a43a4f768c593f34ba3be0',
            method: "GET",
            headers :{}
        }).then((res)=>{
            console.log(res.data)
            setWeatherData(res.data)
            setWeatherImg((weatherData?.['weather'][0] as any)?.icon)
        }
            
        )
        }, [] );

	return (
        <div className="grid justify-center mt-20 relative mx-40 gap-1.5">
            <h1 className="flex justify-center text-lg">{weatherData?.['name']}</h1>
            <div className="rounded-full">
                <Image
                    className="absolute top-0 left-10"
                    src={!!weatherImg ? "https://openweathermap.org/img/wn/"+weatherImg+"@2x.png": "https://openweathermap.org/img/wn/10d@2x.png"}
                    width={100}
                    height={100}
                    alt="Weather Icon"
                />
            </div>
            <h1>{weatherData?.['weather'][0]['main']}</h1>
            <h3>{weatherData?.['weather'][0]['description']}</h3>
            <h2>Feels like : {Math.floor((weatherData?.['main'] as any)?.temp - 273)} Celsius</h2>
            <button 
                className="bg-black-500 text-white active:bg-black-600 font-bold uppercase text-lg px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                type="button"
                onClick={
                    ()=>
                    {
                        window.sessionStorage.setItem('city',props.query)
                    }
                }
                >  
            ❤️
            </button>
        </div>
    )
}
