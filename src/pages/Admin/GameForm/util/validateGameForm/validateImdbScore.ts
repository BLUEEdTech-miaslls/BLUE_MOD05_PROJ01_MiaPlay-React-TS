const validateImdbScore = (score: string) => {
  if (score) {
    if (isNaN(Number(score))) return "must be a number";
    if (Number(score) < 0 || Number(score) > 10) {
      return "IMDB score invalid";
    }

    return "";
  } else {
    return "IMDB score is required";
  }
};

export default validateImdbScore;
