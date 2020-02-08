import * as companys from "./types";

export default {
  [companys.SET_COMPANYS](state, companys) {
    state.data = companys;
  }
};
