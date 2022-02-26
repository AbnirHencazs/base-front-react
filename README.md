Base for project development using react library

This is meant to be cloned as is and extend on its base to develop react web applciations in a standardized way.

## .babelrc

This file contains configuration required in order for babel to recognize babel presets which allow, for example, to convert JSX code to compatible code which can be executed by old javascript engines.

## webpack.config.js

Web pack is a module bundler, it takes the react code and converts it to static files which can be served. The configuration of this file  dictates which files will webpack bundle in the final application. Handle with care.