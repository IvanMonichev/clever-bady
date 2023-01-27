import * as nodePath from 'path';

const buildFolder = './dist';
const srcFolder = './src';
const rootFolder = nodePath.basename(nodePath.resolve());

export const path = {
  build: {
    html: `${buildFolder}/`,
    images: `${buildFolder}/assets/images/`,
    videos: `${buildFolder}/assets/video/`,
    svg: `${srcFolder}/assets/images/svg/**/*.svg`,
    css: `${buildFolder}/assets/css/`,
    js: `${buildFolder}/assets/js/`,
    fonts: `${buildFolder}/assets/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.pug`,
    // html: `${srcFolder}/*.html`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico}`,
    videos: `${buildFolder}/video/**/*.{mp4}`,
    fonts: `${srcFolder}/fonts/*.*`,
    svg: `${srcFolder}/images/**/*.svg`,
    js: `${srcFolder}/**/*.js`,
    scss: `${srcFolder}/scss/index.scss`,
  },
  watch: {
    html: `${srcFolder}/**/*.pug`,
    // html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    videos: `${buildFolder}/video/**/*.{mp4}`,
    fonts: `${srcFolder}/fonts/*.*`,
    js: `${srcFolder}/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder
};
