import Link from 'next/link';
import { use } from 'react';

async function getPosts() {
  const posts = await fetch('https://dummyjson.com/posts?limit=5');
  return posts.json();
}

const Page = () => {
  const { posts } = use(getPosts());
  return (
    <div>
      <ul>
        {posts.map((p: any) => (
          <li key={p.id}>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Page;
