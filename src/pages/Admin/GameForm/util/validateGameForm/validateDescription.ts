const validateDescription = (description: string) => {
  return description ? "" : "description is required";
};

export default validateDescription;
