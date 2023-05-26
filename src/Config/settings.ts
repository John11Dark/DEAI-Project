const LOCAL_IP_ADDRESS = "10.10.10.151";
const PORT = "3000";
const settings = {
  dev: {
    apiUrl: `http://${LOCAL_IP_ADDRESS}:${PORT}/api`,
    assetsUrl: `http://${LOCAL_IP_ADDRESS}:${PORT}/assets/`,
    pixelsUrl: "https://api.pexels.com/v1/search?query=",
  },
  staging: {
    //apiUrl: "https://dolphinpoolsltdbackend.herokuapp.com/api",
    // assetsUrl: "https://dolphinpoolsltdbackend.herokuapp.com/assets/",
    apiUrl: `http://${LOCAL_IP_ADDRESS}:${PORT}/api`,
    assetsUrl: `http://${LOCAL_IP_ADDRESS}:${PORT}/assets/`,
    pixelsUrl: "https://api.pexels.com/v1/search?query=",
  },
  prod: {
    apiUrl: "https://dolphinpoolsltdbackend.herokuapp.com/api",
    assetsUrl: "https://dolphinpoolsltdbackend.herokuapp.com/assets/",
    pixelsUrl: "https://api.pexels.com/v1/search?query=",
  },
};

const getCurrentSettings = () => {
  if ("__DEV__" === "__DEV__") return settings.dev;
  return settings.prod;
};

export default getCurrentSettings();
