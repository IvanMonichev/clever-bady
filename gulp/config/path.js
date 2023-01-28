import * as nodePath from 'path';

const buildFolder = './dist';
const srcFolder = './src';
const rootFolder = nodePath.basename(nodePath.resolve());

export const path = {
  build: {
    html: `${buildFolder}/`,
    images: `${buildFolder}/images/`,
    videos: `${buildFolder}/videos/`,
    svg: `${buildFolder}/images/svg/**/*.svg`,
    styles: `${buildFolder}/styles/`,
    scripts: `${buildFolder}/scripts/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.pug`,
    // html: `${srcFolder}/*.html`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico}`,
    videos: `${srcFolder}/videos/*.*`,
    fonts: `${srcFolder}/fonts/*.*`,
    svg: `${srcFolder}/images/**/*.svg`,
    scripts: `${srcFolder}/scripts/**/*.js`,
    styles: `${srcFolder}/styles/index.scss`,
  },
  watch: {
    html: `${srcFolder}/**/*.pug`,
    // html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    videos: `${srcFolder}/videos/*.*`,
    fonts: `${srcFolder}/fonts/*.*`,
    scripts: `${srcFolder}/scripts/**/*.js`,
    styles: `${srcFolder}/styles/**/*.scss`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder
};
