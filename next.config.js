/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['res.cloudinary.com'], // Esto lo agregue porque en el video 258 "Primeros pasos mostrando las Guitarras", me mostraba un error don la res.cloudinary.
    formats: ['image/avif', 'image/webp' ]
  }
}

module.exports = nextConfig
