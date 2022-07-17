export interface EnvVariables {
    publicKey: string;
    urlEndpoint: string;
  }
  
  const env: EnvVariables = {
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_KEY ?? "public_BmAnS6vmvhsZr/TwvsvhL9j+bgQ=",
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ?? "https://ik.imagekit.io/bbtyrvme7",
  };
  
  export default env;
  