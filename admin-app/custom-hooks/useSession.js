import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

export function useSession () { 
  const router = useRouter();

  useEffect(() => {
    const token = Cookie.get('token');
    const isAuthRoute = ['/login', '/register'].includes(router.pathname);
    
    if (token && isAuthRoute) {
      router.push('/dashboard');
    } else if (!token) {
      router.push('/login');
    }
    
  }, []);
}