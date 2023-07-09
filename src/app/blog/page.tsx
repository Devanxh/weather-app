import Link from 'next/link'

interface postInterface {
  id: number,
  title: string,
  slug: string
}

var posts=[{
    id:1,
    title:"Hello1",
    slug:"h1"
},
{
    id:2,
    title:"Hello2",
    slug:"h2"
   }] 

export default function PostList() {
  return (
    <ul className='grid justify-center'>
      {posts.map((post: postInterface) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
