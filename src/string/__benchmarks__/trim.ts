const trimRamda = require('ramda/src/trim');
const trimLodash = require('lodash/trim');
import trim from '../trim';

const testStr = '           fawfawfsafgregr      ';

export const trim = {
  ramda: () => {
    trimRamda(testStr);
  },
  lodash: () => {
    trimLodash(testStr);
  },
  utils: () => {
    trim(testStr);
  },
};

export default trim;