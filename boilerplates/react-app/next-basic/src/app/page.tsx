import Image from 'next/image';

const Home = () => {
  return (
    <main>
      <p>content</p>
      <Image priority src="/next.svg" height={32} width={32} alt="Follow us on Twitter" />
    </main>
  );
};

export default Home;
