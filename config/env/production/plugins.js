module.exports = ({ env }) => ({
  upload: {
    provider: "imagekit",
    providerOptions: {
      publicKey: "public_YB9Jm2l/BVdSIZn+Ds2U0j2Dkzc=", // put your publicKey here
      privateKey: "private_5P92yfWl5Ah8kxM6ZMJlGMQFXvM=", // put your privateKey here
      urlEndpoint: "https://ik.imagekit.io/povo8thngv", // put your urlEndpoint
      params: {
        // optional section
        folder: "/production/images", // folder location in imagekit.  Defaults to "/" if value is not supplied
      },
    },
  },
});
