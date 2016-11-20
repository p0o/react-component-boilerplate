# React Component Boilerplate

> A simple boilerplate for React component development.

## Features

* Code bundling via [Webpack](https://webpack.github.io)
* Modern JavaScript syntax(ES2015+) via [Babel](https://babeljs.io)
* Style pre-processing via [SASS/SCSS](http://sass-lang.com)
* Hot Module Replacement via [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* Test toolchain with [AVA](https://github.com/avajs/ava), [enzyme](https://github.com/airbnb/enzyme) and [nyc](https://github.com/istanbuljs/nyc)

## Usage

* Setup

    ```
    git clone https://github.com/jeremyxgo/react-component-boilerplate.git your-project-name
    cd your-project-name
    npm install
    ```
    - Updating package name, version, description and author in `package.json`
    - Updating component name in `./webpack.config.base.babel.js` and related file under `./src` to whatever you want.

* Start dev server(with LiveReload and HMR)

    ```
    npm run server
    ```
    - Open web browser and navigate to [http://localhost:3000](http://localhost:3000),
    now you can see your changes without reloading after you edit the files under `./src`

* Build(for production)
    ```
    npm run build
    ```

* Build(for development)
    ```
    npm run build:dev
    ```

* Unit testing
    ```
    npm run test
    ```

* Real-time unit testing
    ```
    npm run test:watch
    ```
    - Test will run automatically when you edit any file under `./src` and `./test`

* Generate coverage report
    ```
    npm run coverage
    ```
    - You can find the coverage report under `./coverage`

## License

MIT