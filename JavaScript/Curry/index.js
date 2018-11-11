/*
* 柯里化函数，https://segmentfault.com/q/1010000016971718
* */
/*
* 请实现test2函数满足以下四个条件使其通过测试，以最简洁的方式完成，并保证代码质量
module.exports.test2 = (input) => {
}

(1)test2() === 0
(2)test2(1)() === 1
(3)test2(1)(2)(3)(4)() === 10
(4)const t2 = test2(1)(2); t2(3)() === 6; t2(4)() === 7
*/
const test2 = input => {
  const fn = data => {
    const fn2 = data2 => (data2 ? fn(data2 + data) : data);
    return fn2;
  };
  return input === undefined ? 0 : fn(input);
};
console.log(test2() === 0);
// console.log('test2',test2())
console.log(test2(1)() === 1);
// console.log('test2(1)()',test2(1)())
console.log(test2(1)(2)(3)(4)() === 10);
const t2 = test2(1)(2);
console.log(t2(3)() === 6);
console.log(t2(4)() === 7);
console.log("t2", t2(4)());
