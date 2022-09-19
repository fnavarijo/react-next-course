import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

export function useSession () { 
  const router = useRouter();

  useEffect(() => {
    const token = Cookie.get('token');
    if (token) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, []);
}