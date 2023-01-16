import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      },
      props: {}
    };
  }

  return {
    props: {}
  };
};

export default () => {
  return (
    <section className="container mx-auto text-center">
      <p>SERVER SIDE</p>
    </section>
  );
};
