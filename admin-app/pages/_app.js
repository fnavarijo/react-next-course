import { useRouter } from 'next/router';

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthLayout from '../components/layout/Auth';
import DashboardLayout from '../components/layout/Dashboard';

const isAuthPaths = (path) => ['/login', '/register'].includes(path);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const Layout = isAuthPaths(router.pathname) ? AuthLayout : DashboardLayout;
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
