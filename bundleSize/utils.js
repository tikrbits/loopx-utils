/* eslint-disable no-console */
import map from '@tib/utils/array/map';
import range from '@tib/utils/array/range';
import drop from '@tib/utils/array/drop';
import filter from '@tib/utils/array/filter';
import sum from '@tib/utils/array/sum';

const arr = range(0, 99);

console.log(sum(drop(10, map(x => x * 2, filter(x => x % 2, arr)))));
