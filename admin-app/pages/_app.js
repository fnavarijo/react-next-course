import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthLayout from '../components/layout/Auth';

function MyApp({ Component, pageProps }) {
  return (<AuthLayout>
      <Component {...pageProps} />
    </AuthLayout>)
}

export default MyApp
