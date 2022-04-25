const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/ts/app.tsx', 'public/js') // mix.js -> mix.ts パスを js ts に、拡張子は tsx に
    .react()
    .sass('resources/sass/app.scss', 'public/css') // sass のトランスパイルを追記
    // postCss は options で
    .options({
        postCss: [
            // postCssの第3引数そのまま
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
        ]
    })
    /* postCss() にそのままsass を渡すとエラーになります
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    */
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}
