import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import webpcss from 'gulp-webpcss';
import replace from "gulp-replace";
import sourceMaps from "gulp-sourcemaps";

const sass = gulpSass(dartSass);

export const scss = () =>
  app.gulp.src(app.path.src.styles)
    .pipe(app.plugins.if(
      app.isDev,
      sourceMaps.init())
    )
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .pipe(replace('../../../', '../'))
    .pipe(replace('../../', '../'))
    .pipe(groupCssMediaQueries())
    .pipe(
      webpcss(
      {
        webpClass: '.webp',
        noWebpClass: '.no-webp'
      }
    ))
    .pipe(app.plugins.if(
      app.isBuild,
      autoprefixer({
      grid: 'autoplace',
    })))
    .pipe(app.plugins.if(
      app.isBuild,
      cleanCss()))
    .pipe(rename({
      basename: 'style',
      extname: ".min.css"
    }))
    .pipe(app.plugins.if(
      app.isDev,
      sourceMaps.write('/'))
    )
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(app.plugins.browserSync.stream());
