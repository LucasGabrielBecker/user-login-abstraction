import validations from "./fieldValidation";
import defaults from "../env";
export default {
  login: (userData) => {
    if (!userData) return;

    if (validations.usernameValidation(userData.username)) {
      return {
        succes: false,
        msg: "The username must not contain special caracters",
      };
    }

    if (
      userData.username === defaults.defaultUsername &&
      userData.password === defaults.defaultPassword
    ) {
      return { succes: true, msg: `User loged succesfully` };
    }

    return { succes: false, msg: `Bad credentials` };
  },
};
