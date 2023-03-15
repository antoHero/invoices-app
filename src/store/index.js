import { createStore } from "vuex";

import VuexPersistence from "vuex-persist";
import mutations from "./mutations";
const debug = process.env.NODE_ENV !== "production";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = createStore({
  state: {
    activeInvoice: {},
  },
  mutations,
  plugins: [vuexLocal.plugin],
  strict: debug,
});

export default store;
