export default {
  usernameValidation: (username) => {
    let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return regex.test(username);
  },
};
