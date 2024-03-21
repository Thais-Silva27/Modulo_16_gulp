const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass')); /*apos a intalação dos pluggins gulp/sass*/
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp.src('./source/styles/main.scss') /*('./source/styles/*.scss')*/
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
        
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}



exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;

