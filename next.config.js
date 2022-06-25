/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "platform-lookaside.fbsbx.com",
      'images2.minutemediacdn.com',
      'scontent.fgyd4-2.fna.fbcdn.net',
      'lh3.googleusercontent.com'
    ]
  }
  
}

module.exports = nextConfig
