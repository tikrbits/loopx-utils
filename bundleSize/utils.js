/* eslint-disable no-console */
import map from '@artlab/utils/array/map';
import range from '@artlab/utils/array/range';
import drop from '@artlab/utils/array/drop';
import filter from '@artlab/utils/array/filter';
import sum from '@artlab/utils/array/sum';

const arr = range(0, 99);

console.log(sum(drop(10, map(x => x * 2, filter(x => x % 2, arr)))));
