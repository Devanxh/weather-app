import { Suspense, useState } from 'react'
import Results from '../[city]/page'
import { useRouter } from 'next/navigation';

export default function SearchBox() {
    const [query, setQuery ] = useState("");
    const router = useRouter()
    
    return (
        <>
            <div className='flex justify-center align-center mt-10'>
                <input
                    type="text"
                    placeholder='city...'
                    className="outline-indigo mr-6 rounded-sm pl-4 w-64 font-raleway sm:mr-0 sm:mb-4 sm:py-1 text-black"
                    onChange={
                        (e)=>{
                            setQuery(e.target.value)
                        }
                    }
                />             
                <button 
                    className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-4'
                    onClick={
                        ()=>{
                            router.push("/weather/"+query)
                        }
                    }
                >
                    Submit
                </button>           
            </div>
        </>

    )
}