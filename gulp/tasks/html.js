/*import fileInclude from 'gulp-file-include';*/
import versionNumber from 'gulp-version-number';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import pug from 'gulp-pug';
import pugbem from 'gulp-pugbem';

export const html = () =>
  app.gulp.src(app.path.src.html)
    //.pipe(fileInclude())
    .pipe(pug({
      pretty: '\t',
      plugins: [pugbem]
    }))
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(replace('../../', './'))
    .pipe(replace('../', './'))
    .pipe(rename('index.html'))
    .pipe(
      versionNumber(
        {
          'value': '%DT%',
          'append': {
            'key': '_v',
            'cover': 0,
            'to': ['css', 'js']
          },
          'output': {
            'file': 'gulp/version.json'
          }
        }
      ))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
