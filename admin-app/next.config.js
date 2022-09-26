/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/proyectos/:id*',
  //       destination: '/dashboard',
  //       permanent: false
  //     }
  //   ]
  // }
}

module.exports = nextConfig
