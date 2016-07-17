var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var debug = require('gulp-debug');


gulp.task('bootstrap-copy', function() {
  var boot_base = 'app/bower_components/bootstrap/dist/';

  gulp.src(boot_base + 'css/{bootstrap.css,bootstrap.css.map,bootstrap-theme.css,bootstrap-theme.css.map}')
    .pipe(gulp.dest('app/vendor/css/'));

  gulp.src(boot_base + 'fonts/*')
    .pipe(gulp.dest('app/vendor/fonts/'));
});

gulp.task('bootstrap-concat', function() {
  var bower_base = 'app/bower_components/';

  var vendor_ang = [];

  vendor_ang.push(bower_base + 'jquery/dist/jquery.js');
  vendor_ang.push(bower_base + 'angular/angular.js');
  vendor_ang.push(bower_base + 'angular-ui-router/release/angular-ui-router.js');
  vendor_ang.push(bower_base + 'holderjs/holder.js');
  vendor_ang.push(bower_base + 'bootstrap/dist/js/bootstrap.js');

  console.log(vendor_ang);

  return gulp.src(vendor_ang)
    .pipe(concat('angular-bootstrap.js'))
    .pipe(gulp.dest('app/vendor/js'));
});

gulp.task('vendor-dev', ['bootstrap-copy', 'bootstrap-concat'], function() {});


gulp.task('sass', function() {
  return gulp.src(['app/scss/**/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app',
    },
    port: 8080,
  });
});

gulp.task('watch', ['browserSync', 'sass', 'js'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);

  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/frontend.js', browserSync.reload);

  gulp.watch('app/app.js', ['js']);
  gulp.watch('app/components/**/*.js', ['js']);
});

gulp.task('js', function() {
  gulp.src([
    'app/components/**/*.module.js', 
    'app/main/**/*.module.js', 
    'app/app.js',
    'app/components/**/*.js', 
    'app/main/**/*.js'])
  .pipe(debug())
  .pipe(concat('frontend.js'))
  .pipe(gulp.dest('app/js'));
});

gulp.task('default', ['js', 'watch'], function() {
    console.log(this);
});
