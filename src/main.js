import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

//require.context - from Webpack
//search in components
//search in subdirs? no
//expression to match filename against
const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);
//.keys gives an array of each file so iterate through and get object exported through require component
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  //convert filenames - use lodash to convert filenames to pascal case and remove what comes before and after
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );
  //registering components globally and telling vue to look for component options on default
  //this will exist if component was exported with export default
  //or vue will go back to modules root for module.exports
  Vue.component(componentName, componentConfig.default || componentConfig);
});

// //first argument: name we want to call the component
// //second argument: references BaseIcon in import statement above
// Vue.component("BaseIcon", BaseIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
