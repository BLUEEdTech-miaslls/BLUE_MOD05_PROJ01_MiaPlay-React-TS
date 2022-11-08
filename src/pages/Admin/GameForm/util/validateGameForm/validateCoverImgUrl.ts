const validateCoverImgUrl = (url: string) => {
  if (url) {
    const extensionTest =
      url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".png");

    return extensionTest && url.startsWith("http")
      ? ""
      : "invalid image URL format";
  } else {
    return "cover image URL is required";
  }
};

export default validateCoverImgUrl;
