const pkg = require('../package.json');

const date = {
  day: new Date().getDate(),
  month:
    'January February March April May June July August September October November December'.split(
      ' ',
    )[new Date().getMonth()],
  year: new Date().getFullYear(),
};

module.exports = (name = null) =>
  `${`
/**
 * Mariko ${name ? `${name} ` : ''}${pkg.version}
 * ${pkg.description}
 * ${pkg.homepage}
 *
 * Copyright 2021-${date.year} ${pkg.author}
 *
 * Released under the ${pkg.license} License
 *
 * Released on: ${date.month} ${date.day}, ${date.year}
 */
`.trim()}\n`;