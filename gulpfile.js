var gulp = require('gulp');
var webserver = require('gulp-webserver');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tscConfig = require('./tsconfig.json');

var appSrc = 'builds/development/';
var tsSrc = 'process/typescript/';

gulp.task('html', function() {
  gulp.src(appSrc + '**/*.html');
});

gulp.task('css', function() {
  gulp.src(appSrc + '**/*.css');
});

gulp.task('copylibs', function() {
  return gulp
    .src([
      'node_modules/angular/angular.js'
    ])
    .pipe(gulp.dest(appSrc + 'js/angular'));
});

gulp.task('typescript', function() {
  return gulp
    .src(tsSrc + '**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(appSrc + 'js/'));
});

gulp.task('watch', function() {
  gulp.watch(tsSrc + '**/*.ts', ['typescript']);
  gulp.watch(appSrc + 'css/*.css', ['css']);
  gulp.watch(appSrc + '**/*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src(appSrc)
    .pipe(webserver({
      livereload: true
      , open: true
    }));
});

gulp.task('default', ['copylibs', 'typescript', 'watch', 'webserver']);
