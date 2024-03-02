/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'jobs.rangam.com',
                protocol:'https'
            }
        ]
    }
};

export default nextConfig;
