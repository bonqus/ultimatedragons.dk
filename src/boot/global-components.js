import Page from "src/components/Page.vue";

// we globally register our component with Vue
export default ({ app }) => {
  app.component("page", Page);
};
