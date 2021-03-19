import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#ffca07",
        secondary: "#2973ab",
        accent: "#1867c0",
        error: "#b71c1c",
      },
    },
  },
});
