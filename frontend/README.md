# fullstack-example-frontend

A simple Vue.js project that serves user interface for TODO web app.

## Covered Features

* Class style vue component with TypeScript
* Integration with Bootstrap 4 (bootstrap-vue)

## How to start development

### Install dependencies

```shell
npm install
```

### Run the application

```shell
npm run serve
```

### Compile and minify for production

```shell
npm run build
```

### Lint and fix files

```shell
npm run lint
```

### Generate API client code from OpenAPI spec

```
npm run generate-client
```

## How to create this project from scratch

### Create a new Vue.js project with VueCLI

```shell
vue create frontend 
# Specify plugins in the dialog as follows:
# ? Please pick a preset: Manually select features
# ? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter
# ? Use class-style component syntax?: Yes
# ? Use Babel alongside TypeScript?: Yes
# ? Use history mode for router?:  Yes
# ? Pick a CSS pre-processor: Sass/SCSS (with dart-sass)
# ? Pick a linter / formatter config: Airbnb
# ? Pick additional lint features: Lint on save
# ? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.?: In dedicated config files
# ? Save this as a preset for future projects?: No

# Change working directory to the created project.
cd frontend

# Install BootstrapVue via NPM
npm install -s bootstrap-vue
```

### Modify main.js and import BootstrapVue dependencies.

```typescript
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
```

\* Alternatively you can install BootstrapVue as a Vue.js plugin although it doesn't allow full control over BootstrapVue configuration.

Reference: https://bootstrap-vue.js.org/docs/#vue-cli-3 
