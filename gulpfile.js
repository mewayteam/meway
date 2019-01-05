const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const deleted = require('gulp-deleted');
browserSync = require('browser-sync').create();
const paths = {
 src: {
  js: './src/js/**/*.js',
  scss: './src/scss/**/*.scss'
 },
 dist: {
  dist: './dist',
  css: './dist/css',
  js: './dist/js'
 }
};

function scripts() {
 return gulp
  .src(paths.src.js)
  .pipe(deleted(paths.dist.js, 'main.js'))
  .pipe(
   babel({
    presets: ['@babel/env']
   })
  )
  .pipe(gulp.dest(paths.dist.js))
  .pipe(browserSync.stream());
}

gulp.task('js', scripts);

function styles() {
 return gulp
  .src('./src/scss/main.scss')
  .pipe(deleted(paths.dist.css, '**/*'))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(paths.dist.css))
  .pipe(browserSync.stream());
}

gulp.task('scss', styles);

function watch() {
 browserSync.init({
  server: {
   baseDir: './dist',
   index: 'index.html'
  },
  watch: true
 });
 browserSync.reload();
 gulp.watch(paths.src.scss, styles);
 gulp.watch(paths.src.js, scripts);
 gulp.watch('/dist/*.html', browserSync.reload());
}

gulp.task('watch', watch);
