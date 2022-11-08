const validateYTgameplay = (url: string) => {
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
    return "gameplay - YouTube URL is required";
  }
};

export default validateYTgameplay;
