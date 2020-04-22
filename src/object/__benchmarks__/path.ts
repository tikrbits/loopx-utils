const pathRamda = require('ramda/src/path');
const pathLodash = require('lodash/get');
import path from '../path';

const pth = ['a', 0, 'b'];
const testObj = {
  a: [{ b: 'check' }, 2, 3],
};

export const path = {
  ramda: () => {
    pathRamda(pth, testObj);
  },
  lodash: () => {
    pathLodash(testObj, pth);
  },
  utils: () => {
    return path(pth, testObj);
  },
};

export default path;