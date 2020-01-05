# fullstack-example-frontend

## Create this project from the scratch

### Create a Vue.js project with Vue CLI

```shell
vue create frontend 
# Specify plugins in the dialog as follows:
# ? Please pick a preset: Manually select features
# ? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter
# ? Use class-style component syntax? Yes
# ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
# ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
# ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
# ? Pick a linter / formatter config: Airbnb
# ? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
# ? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
# ? Save this as a preset for future projects? No

# Change working directory to the created project.
cd frontend
```

### Install BootstrapVue via NPM

```shell
npm install -s bootstrap-vue
```

Modify main.js and import BootstrapVue dependencies.

```typescript
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
```

Alternatively you can install BootstrapVue as a Vue.js plugin although it doesn't allow full control over BootstrapVue configuration.

Reference: https://bootstrap-vue.js.org/docs/#vue-cli-3 

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

### Lints and fixes files
```
npm run lint
```

### Lints and fixes files
```
npm run generate-client
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
