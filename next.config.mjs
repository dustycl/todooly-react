/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.
    basePath: '/todooly-react',
    assetPrefix: '/todooly-react/',
  }
   
  export default nextConfig