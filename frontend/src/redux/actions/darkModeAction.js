import { TOGGLE_DARK_MODE } from "../constants/darkThemeConstant";

export const toggleDarkMode = () => {
  return {
    type: TOGGLE_DARK_MODE,
  };
};
