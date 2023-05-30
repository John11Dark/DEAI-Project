const LOCAL_IP_ADDRESS = "127.0.0.1";
const PORT = "5000";
const settings = {
  dev: {
    apiUrl: `http://${LOCAL_IP_ADDRESS}:${PORT}/`,
    assetsUrl: `http://${LOCAL_IP_ADDRESS}:${PORT}/assets/`,
    pixelsUrl: "https://api.pexels.com/v1/search?query=",
    socketUrl: `ws://${LOCAL_IP_ADDRESS}:${PORT}/ws/chat-socket/`,
  },
  staging: {
    //apiUrl: "https://dolphinpoolsltdbackend.herokuapp.com/api",
    // assetsUrl: "https://dolphinpoolsltdbackend.herokuapp.com/assets/",
    apiUrl: `http://${LOCAL_IP_ADDRESS}:${PORT}/api`,
    assetsUrl: `http://${LOCAL_IP_ADDRESS}:${PORT}/assets/`,
    pixelsUrl: "https://api.pexels.com/v1/search?query=",
    socketUrl: `ws://${LOCAL_IP_ADDRESS}:${PORT}/ws/chat-socket/`,
  },
  prod: {
    apiUrl: "https://dolphinpoolsltdbackend.herokuapp.com/api",
    assetsUrl: "https://dolphinpoolsltdbackend.herokuapp.com/assets/",
    pixelsUrl: "https://api.pexels.com/v1/search?query=",
    socketUrl: `ws://${LOCAL_IP_ADDRESS}:${PORT}/ws/chat-socket/`,
  },
};

const getCurrentSettings = () => {
  if (process.env.NODE_ENV === "development") return settings.dev;
  return settings.prod;
};

export default getCurrentSettings();
