'use client'
import './globals.css'
import 'tailwindcss/tailwind.css'
 
import { useRouter } from 'next/navigation'
import SearchBox from '@/app/weather/search/page';
// @search/
 
export default function Page() {
  const router = useRouter()
 
  return (
    <>
      <div>
        <SearchBox />
      </div>
    </>
  )
}

export const FavCitiesArray : Array<string> = [];