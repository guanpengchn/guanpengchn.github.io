var gulp = require('gulp');
var shell = require('gulp-shell')
var del = require('del');
var ghPages = require('gulp-gh-pages');

// 删除之前生成的dist目录
gulp.task('clean', function (cb) {
  return del([
    'dist/',
    '.publish/'
  ], cb);
});

// shell中执行命令生成文件
gulp.task('build', ['clean'], () => {
  return gulp.src('*.js', {
      read: false
    })
    .pipe(shell([
      'npm run build'
    ]))
})

// 部署到github pages上
gulp.task('deploy',['build'], () => {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      remoteUrl:"git@github.com:guanpengchn/guanpengchn.github.io.git",
      branch:"master"
    }))
});

gulp.task('default', ['deploy']);