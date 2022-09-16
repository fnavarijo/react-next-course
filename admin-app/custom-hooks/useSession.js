import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

export function useSession () {
  const [cookies] = useCookies(['token', 'expirationDate']);
  
  const router = useRouter();

  useEffect(() => {
    const { token } = cookies;
    if (token) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, []);
}