import { AUTH, LOGOUT } from "../constant/actionConstant";
export default (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      return state;
    default:
      return state;
  }
};
