var gulp = require('gulp');
var stylus = require('gulp-stylus');
var inline = require('gulp-inline');


gulp.task('default', ['public', 'styles', 'watch']);

gulp.task('styles', function() {
  gulp.src('./styles/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/css/'));
})

gulp.task('public', function () {
  gulp.src('public/**/*')
  .pipe(gulp.dest('./dist/'))
})

gulp.task('watch', function() {
  gulp.watch('styles/*.styl', ['styles']);
  gulp.watch('public/**/*', ['public'])
})
