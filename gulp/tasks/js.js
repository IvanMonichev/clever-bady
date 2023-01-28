import webpack from 'webpack-stream';
import sourceMaps from 'gulp-sourcemaps';

export const js = () => {
  return app.gulp.src(app.path.src.scripts)
    .pipe(app.plugins.if(
      app.isDev,
      sourceMaps.init())
    )
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'JS',
        message: 'Error: <%= error.message %>',
      }))
    )
    .pipe(webpack({
      mode: app.isBuild ? 'production' : 'development',
      output: {
        filename: 'main.min.js',
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['css-loader'],
          },
        ],
      }
    }))
    .pipe(app.plugins.if(
      app.isDev,
      sourceMaps.write('/'))
    )
    .pipe(app.gulp.dest(app.path.build.scripts))
    .pipe(app.plugins.browserSync.stream());
}
