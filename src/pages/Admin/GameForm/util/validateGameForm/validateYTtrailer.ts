const validateYTtrailer = (url: string) => {
  if (url) {
    if (
      url.startsWith("https://www.youtube.com/watch?v=") &&
      url.split("=")[1].length === 11
    ) {
      return "";
    } else {
      return "invalid YouTube URL format";
    }
  } else {
    return "trailer - YouTube URL is required";
  }
};

export default validateYTtrailer;
