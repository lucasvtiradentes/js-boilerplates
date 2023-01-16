import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type IMode = 'authenticated' | 'unauthenticated';

export function useAllowed(redirectPage: string, mode: IMode = 'authenticated') {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [canAccess, setCanAccess] = useState(false);

  useEffect(() => {
    if (status !== 'loading') {
      if (status === mode) {
        // !session
        setCanAccess(true);
      } else {
        router.push(redirectPage);
      }
    }
  }, [status]);

  return canAccess;
}
