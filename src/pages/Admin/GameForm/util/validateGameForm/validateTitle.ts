const validateTitle = (title: string) => {
  return title ? "" : "title is required";
};

export default validateTitle;
