import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from "./gulp/config/plugins.js";
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fonstStyle } from './gulp/tasks/fonts.js';
import { zip } from './gulp/tasks/zip.js';
import { videos } from './gulp/tasks/videos.js';

// Глобальная переменная

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path,
  gulp,
  plugins
};

const fonts = gulp.series(otfToTtf, ttfToWoff, fonstStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, images, videos));

const watcher = () => {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.styles, scss);
  gulp.watch(path.watch.scripts, js);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.videos, videos);
  gulp.watch(path.watch.fonts, fonts);
};

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip)

// Установка сценариев
gulp.task('default', dev);
export {dev, build, deployZip}
