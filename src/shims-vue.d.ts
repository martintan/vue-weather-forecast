/* eslint-disable */
// import { getInstance } from './utils/auth';

// const instance = getInstance();
// type Auth0Instance = typeof instance;

// /*
//   Register our custom Auth0 Plugin so that components can
//   use it with Typescript support
//   References: 
//     https://vuex.vuejs.org/guide/typescript-support.html#typing-store-property-in-vue-component
//     https://stackoverflow.com/a/65785085
//   For some reason Typescript isn't compiling shims-plugins.d.ts 
//   so we need to leave it here until it's resolved.
// */
// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $auth: Auth0Instance;
//   }
// }

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
