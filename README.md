# Vue Weather Forecast

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

## Screens Overview

All screens are organized under `src/views`.

1. `Login.vue` - A simple page that contains a Login button. It should allow the user to authenticate with our application vie the Auth0 Client.

2. `Home.vue` - Displays the user's basic profile (from their Github public profile), and displays a simple form that enables them to query the Weather Forecast of a certain city.


## Development notes



### Component conventions

1. Prefix reusable component names with `WF` to easily identify it from components from other plugins (e.g. UI framwework specific components or third-party plugin components)

### How to inject & use the Auth0 plugin in a component

1. Inject Auth into the component using `inject`. Make sure to also import `IAuthPlugin` for type casting below.

```
import { IAuthPlugin } from '@/utils/auth';

export default defineComponent({
  // ...
  inject: ['Auth'],
  // ...
});
```

2. (Workaround) To access auth, temporarily cast `(this as any)` then access `Auth` and cast it to `IAuthPlugin`. This is necessary until the project has been updated to have proper typing support for custom plugins.

```
const auth = (this as any).Auth as IAuthPlugin;
```

## Additional commands

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
