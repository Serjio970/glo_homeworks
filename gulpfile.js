const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hello', function(){
  console.log('Привет, мир!');
  done();
})

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('min-js', function() {
    return gulp.src('lib/*.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('lib'))
});

gulp.task('watch', function(){
  gulp.watch('lib/*.js', ['min-js']); 
  // Other watchers
});

gulp.task('default', ['min-js', 'watch']);