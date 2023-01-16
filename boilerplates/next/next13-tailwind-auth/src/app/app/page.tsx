'use client';

import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import ROUTES from '../../configs/routes';

export default function Home() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  );
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50" href={'/login'}>
          Sign In
        </Link>
      </div>
    </main>
  );
}

// Authorize User
function User({ session, handleSignOut }: any) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button onClick={handleSignOut} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
          Sign Out
        </button>
      </div>

      <div className="flex justify-center">
        <Link className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50" href={ROUTES.profile}>
          Profile Page
        </Link>
      </div>
    </main>
  );
}
