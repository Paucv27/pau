import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() { 
    return [  
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          { key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://vercel.live;"
           },
        ],
      },
    ];
  }
};

export default nextConfig;
