/* eslint-disable import/no-commonjs, global-require */
const execa = require('execa');

const build = (buildDir, tsTemp) =>
  execa(
    'tsc -p tsconfig.json', {shell: true}
  ).then(() => (
    execa(
      `npx babel ./${tsTemp} -d ${buildDir}`, {shell: true}
    )
  ));

module.exports = build;
