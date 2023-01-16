import { use } from 'react';

type compProps = any;

async function getPost(id: string) {
  const post = await fetch(`https://dummyjson.com/posts/${id}`);
  return post.json();
}

const Page = ({ params }: compProps) => {
  let id = params.id;
  let post = use(getPost(id));
  return (
    <>
      <div>{post.title}</div>
      <div>{post.id}</div>
      <div>{post.body}</div>
    </>
  );
};
export default Page;
