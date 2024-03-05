/** @type {import('next').NextConfig} */

    
const nextConfig = {
    basePath: '/PetsNextjs',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
