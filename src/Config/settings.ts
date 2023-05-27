const LOCAL_IP_ADDRESS = "10.10.10.151";
const PORT = "5173";
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
  if (process.env.NODE_ENV === "development") return settings.dev;
  return settings.prod;
};

export default getCurrentSettings();
