/* eslint-disable no-console */
import map from '@tiopkg/utils/array/map';
import range from '@tiopkg/utils/array/range';
import drop from '@tiopkg/utils/array/drop';
import filter from '@tiopkg/utils/array/filter';
import sum from '@tiopkg/utils/array/sum';

const arr = range(0, 99);

console.log(sum(drop(10, map(x => x * 2, filter(x => x % 2, arr)))));
