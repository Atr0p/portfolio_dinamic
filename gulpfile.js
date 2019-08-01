var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    gulp.src('scss/main.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('public/css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["public/css/*.css","scss/*.scss", "public/js/*.js", "public/*.html"], {
        server: {
            baseDir: "public/"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
});
