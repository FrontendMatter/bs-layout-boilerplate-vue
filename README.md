# bs-layout-boilerplate-vue
[Vue.js](https://github.com/vuejs/vue) application boilerplate using [Bootstrap Layout](https://github.com/themekit/bootstrap-layout).

### Demo
> You can [see a working live demo](http://bs-layout-boilerplate-vue.themekit.io) of this boilerplate.

### Features
- advanced [webpack](https://github.com/webpack/webpack) workflow
- compile Sass using [node-sass](https://github.com/sass/node-sass)
- import Sass files directly from node_modules using [sass-importer-npm](https://github.com/themekit/sass-importer-npm)
- fast incremental builds and hot reloading using [webpack-dev-server](https://github.com/webpack/webpack-dev-server).
- Single Page Application routing using [vue-router](https://github.com/vuejs/vue-router)

## Usage
#### Clone the boilerplate repository
```bash
git clone https://github.com/themekit/bs-layout-boilerplate-vue.git my-project
```
```bash
cd my-project
```

#### Install dependencies
```bash
npm install
```

## Production build

#### Prerequisites
> You should have webpack installed globally:

```bash
npm install -g webpack
```

> Includes minification and several optimizations:

```bash
npm run build
```

#### Development build

A faster build suited for development, with no optimizations and without minification:

```bash
npm run build-dev
```
	
## Development server

> You can start a development server on http://localhost:8080, with FAST incremental builds and HOT reloading (using webpack-dev-server). 

#### Prerequisites

```bash
npm install -g webpack-dev-server
```
	
#### Start server

```bash
npm run dev
```

---

## Get help
Get help directly from our team via our Slack channel. [Request invite](http://themekit-slack-invite.stamplayapp.com/)