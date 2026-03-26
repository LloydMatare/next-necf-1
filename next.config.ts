import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
    api: {
        bodyParser: {
            sizeLimit: "60mb",
        },
    },
};

export default nextConfig;
