import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../../../pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';

export default async () => {
  const session = await unstable_getServerSession(authOptions);

  if (!session) {
    redirect('/');
  }

  return (
    <section className="container mx-auto text-center">
      <p>SERVER SIDE</p>
    </section>
  );
};
