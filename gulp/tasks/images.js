import webp from 'gulp-webp';
// import imageMin from 'gulp-imagemin';
import image from 'gulp-image';

export const images = () =>
  app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.if(
      app.isBuild,
      app.gulp.src(app.path.src.images)))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.plugins.if(
      app.isBuild,
/*      imageMin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      interlaced: true,
      optimizationLevel: 3
      })*/
      image({
        svgo: false,
      })
    ))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browserSync.stream());
