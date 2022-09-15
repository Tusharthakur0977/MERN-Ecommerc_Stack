import { TOGGLE_DARK_MODE } from "../constants/darkThemeConstant";

export const darkModeReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return !state;

    default:
      return state;
  }
};
