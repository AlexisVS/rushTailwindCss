var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var tailwindcss = require('tailwindcss')


gulp.task('css', function () {
    var plugins = [
        tailwindcss,
        autoprefixer({ browsers: ['last 1 version'] }),
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});