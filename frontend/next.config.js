/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net"
            },
            {
                protocol: "https",
                hostname: "porfolio-sujal.onrender.com"
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
            },
        ]
    }
}

module.exports = nextConfig
