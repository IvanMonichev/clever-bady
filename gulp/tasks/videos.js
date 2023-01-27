
export const videos = () =>
  app.gulp.src(app.path.src.videos)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "VIDEOS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.newer(app.path.build.videos))
    .pipe(app.gulp.dest(app.path.build.videos))
    .pipe(app.plugins.browserSync.stream());
