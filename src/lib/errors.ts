export const ERRORS_DICTIONARY = {
  CREATE_USER: {
    409: 'User Email already exists.',
    505: 'Internal server error.',
    400: {
      Email: 'Email Address is not in correct format.',
      Password: 'Password should be from 8 to 128 characters',
      Type: "'Type' must be between 1 and 3. You entered 5.",
    },
  },
}
