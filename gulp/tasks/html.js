/*import fileInclude from 'gulp-file-include';*/
import webpHtml from 'gulp-webp-html';
import versionNumber from 'gulp-version-number';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import pug from 'gulp-pug';

export const html = () =>
  app.gulp.src(app.path.src.html)
    //.pipe(fileInclude())
    .pipe(pug({
      pretty: app.isDev
    }))
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(replace('../../', 'assets/'))
    .pipe(replace('../', 'assets/'))
    .pipe(webpHtml())
    .pipe(
      versionNumber(
      {
      'value': '%DT%',
      'append': {
        'key': '_v',
        'cover': 0,
        'to': ['css', 'js', 'image']
      },
      'output': {
        'file': 'gulp/version.json'
      }
    }
    ))
    .pipe(rename('index.html'))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
