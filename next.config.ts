import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config) => {
        config.externals.push("pino-pretty", "lokijs", "encoding");
        return config;
    },
    sassOptions: {
        silenceDeprecations: ["legacy-js-api"],
    },
};

export default nextConfig;
