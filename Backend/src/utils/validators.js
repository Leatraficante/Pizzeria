const isValidImageURL = (url) => {
  const imageRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
  return imageRegex.test(url);
};

const validateEmail = (value) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(value);
};

const validatePassword = (value) => {
  const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;
  return passwordRegex.test(value) && /[A-Z]/.test(value) && /[a-z]/.test(value);
};

const validatePhoneNumber = (value) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(value);
};

export { isValidImageURL, validateEmail, validatePassword, validatePhoneNumber };
