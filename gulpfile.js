var gulp = require('gulp'),
    jsxcs = require('gulp-jsxcs'),
    mocha = require('gulp-mocha'),
    plumber = require('gulp-plumber');

gulp.task('jscs', function () {
    gulp.src(['*.js'])
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(jsxcs());
});

gulp.task('default', ['jscs']);
