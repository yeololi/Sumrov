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
        destination: "http://210.204.194.10:8080/:path*",
      },
    ];
  },
};

export default nextConfig;
