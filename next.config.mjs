/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Mengubah output menjadi static HTML
  basePath: process.env.NODE_ENV === 'production' ? '//NUEVEN-Siete-Memories2' : '',
  images: {
    unoptimized: true, // GitHub Pages tidak mendukung optimasi gambar bawaan Next.js
  },
};

export default nextConfig;