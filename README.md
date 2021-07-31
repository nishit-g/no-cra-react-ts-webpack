# Why ?

CRA is a great tool, but just wanted to learn how to setup an React project from scratch, and appreciate this beautifully engineered tool (CRA).

# Project Structure

- build : all the bundled code will go here
- src : all the code will be here

# Webpack

## Common config

- Using babel loader to compile js,ts,tsx files
- using css-loader, style-loader to support css files
- For ico, png, jpg, jpeg & gif files, use asset/resource types (availabe from Webpack v5)
- For SVG and Font files support, using asset/inline module type (availabe from Webpack v5)

- Using webpack-merge to merge configs acc. to environment
- Using copy-webpack plugin to copy assets from source to destination
- Using webpack-bundle-analyzer, to analyze bundles after build

## Dev Config

- mode: 'development'
- devtool: 'cheap-module-source-map' (Recommended by CRA)

## Prod Config

- mode : 'production' (Need this, webpack will do optimisations)
- devtool: 'source-map' (by CRA)
- plugins: 'webpack-bundle-analyzer' -> to analyze all the bundles after build

# Tools Integrated

1. React-refresh -> To maintain state between rebuilds
2. Eslint -> Rules for writing code
3. Prettier -> Code formatter
4. Husky -> Pre-commit hook to check rules and format code before commiting

# Future

- Use Snowpack instead of webpack
- ....will update.
