/* eslint-disable no-console */
import map from '@loopx/utils/array/map';
import range from '@loopx/utils/array/range';
import drop from '@loopx/utils/array/drop';
import filter from '@loopx/utils/array/filter';
import sum from '@loopx/utils/array/sum';

const arr = range(0, 99);

console.log(sum(drop(10, map(x => x * 2, filter(x => x % 2, arr)))));
