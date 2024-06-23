/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.imgur.com",
                port: "",
                // pathname: "/account123/**",
            },
            {
                protocol: "https",
                hostname: "imgur.com",
                port: "",
                // pathname: "/account123/**",
            },{
                protocol: "https",
                hostname: "github.com",
                port: "",
                // pathname: "/account123/**",
            },
        ],
    },
};

export default nextConfig;

