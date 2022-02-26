Base for project development using react library

This is meant to be cloned as is and extend on its base to develop react web applciations in a standardized way.

## .babelrc

This file contains configuration required in order for babel to recognize babel presets which allow, for example, to convert JSX code to compatible code which can be executed by old javascript engines.

## webpack.config.js

Web pack is a module bundler, it takes the react code and converts it to static files which can be served. The configuration of this file  dictates which files will webpack bundle in the final application. Handle with care.

## tailwind.config.js

Working with tailwind we'll have to let go of pre-processors like sass or stylus. But a loss is a gain, since theming and layout building become a breeze thanks to this file. You can extend on the already robust tailwindCss values or totally change it to your desire, even apply dark mode configuration from there. For more information refer to tailwind css documentation.

Postcss loader and webpack configuration added.