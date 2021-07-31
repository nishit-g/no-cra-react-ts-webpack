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

## Dev Config

- mode: 'development'
- devtool: 'cheap-module-source-map' (Recommended by CRA)

## Prod Config

- mode : 'production' (Need this, webpack will do optimisations)
- devtool: 'source-map' (by CRA)
