var gulp = require('gulp'),
    connect = require('gulp-connect'),
    paths = {
        src: 'components/**/*.js'
    };

gulp.task('server', function () {
    connect.server();
});

gulp.task('default', ['server']);
