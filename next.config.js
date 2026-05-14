const withPWA = require('next-pwa');
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  disable: process.env.PWA === 'DISABLED',
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/]
})({
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ['raw.githubusercontent.com']
  },
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemon',
        permanent: true,
      },
    ]
  },
})
