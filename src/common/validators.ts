export const isValidEmail = (email: string): boolean => {
  // Regular expression for a basic email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const isValidUsername = (username: string): boolean => {
  // Regular expression for valid usernames (alphanumeric characters only, no spaces or special characters)
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  return usernameRegex.test(username);
};
