import Link from 'next/link'

export default function Navbar () {

    return (
        <div className='flex gap-40 justify-center'>
        <Link className="border border-transparent rounded hover:border-slate-400" href="/favs">
          Favourites
        </Link>
        <Link className="border border-transparent rounded hover:border-slate-400" href="/blog">
            Hello Blogs
        </Link>
        <Link className="border border-transparent rounded hover:border-slate-400" href="/blog">
            Hello Blogs 2
        </Link>
      </div>
    )
}