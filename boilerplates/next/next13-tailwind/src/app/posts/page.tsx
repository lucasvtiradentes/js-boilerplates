import Link from 'next/link';
import { use } from 'react';

async function getPosts() {
  let posts = await fetch('https://dummyjson.com/posts?limit=5');
  return posts.json();
}

const Page = () => {
  let { posts } = use(getPosts());
  console.log(posts);
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
