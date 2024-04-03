/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/addressApi/:path*",
        destination: "https://business.juso.go.kr/:path*",
      },
      {
        source: "/backend/:path*",
        destination: "http://3.39.237.151:8080/:path*",
      },
    ];
  },
};

export default nextConfig;
