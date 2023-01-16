import { useSession } from 'next-auth/react';
import { useAllowed } from '../../utils/useAllowed';
import Link from 'next/link';

export default () => {
  const { data: session } = useSession();

  const isAllowed = useAllowed('/');
  if (!isAllowed) {
    return null;
  }

  return (
    <section className="container mx-auto text-center">
      <h3 className="text-4xl font-bold">Profile Page</h3>
      <Link href={'/'}>Home Page</Link>
      {session ? (
        <div className="details">
          <h5>{session.user?.email}</h5>
        </div>
      ) : null}
    </section>
  );
};
