/** @type {import('next').NextConfig} */
const nextConfig = {
    // fixes the error null error of useContext ( look at : https://github.com/vercel/next.js/issues/63123#issuecomment-2002398438)
    webpack: (config) => {
      return {
        ...config,
        externals: [...config.externals, "pino-pretty", "encoding"],
      };
    },
    images:{
      remotePatterns:[
        {
          hostname: "s2.googleusercontent.com"
        },
        {
          hostname: "www.google.com"
        },
        {
          hostname:"picsum.photos"    // im using this for testing images ( for UI only)
        },
        {
          hostname: "pbs.twimg.com"
        },
        {
          hostname: "media.licdn.com"
        }
      ]
    }
  };
  
  export default nextConfig;