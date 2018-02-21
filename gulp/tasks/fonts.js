const gulp        = require('gulp');

gulp.src('src/fonts/**/*').pipe(gulp.dest('www/static/fonts'));