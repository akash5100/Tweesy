import * as api from "../api";
import { AUTH } from "../constant/actionConstant";
// action creaters

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(FormData);

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
