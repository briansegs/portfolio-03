const isInvalidValue = (values) => ({
  name: {
    isInvalid: !/^[a-zA-Zà-ÿÀ-ß' -]{2,20}$/.test(values.name),
    errorMessage: "Invalid length or characters.",
  },
  email: {
    isInvalid: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email),
    errorMessage: "Must include '@' and extension.",
  },
  subject: {
    isInvalid: values.subject.length < 5 || values.subject.length > 100,
    errorMessage: "Must be 5-100 characters.",
  },
  message: {
    isInvalid: values.message.length < 5 || values.message.length > 1000,
    errorMessage: "Must be 10-1000 characters.",
  },
});

export default isInvalidValue;
