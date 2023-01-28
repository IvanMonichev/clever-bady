export const copy = () =>
  app.gulp.src(app.path.src.fonts)
    .pipe(app.gulp.dest(app.path.build.fonts))
